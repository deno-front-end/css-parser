use cssparser::*;
use serde_json::Value;
use wasm_bindgen::prelude::*;

macro_rules! JArray {
    ($($e: expr,)*) => { JArray![ $( $e ),* ] };
    ($($e: expr),*) => { Value::Array(vec!( $( $e.to_json() ),* )) }
}

trait ToJson {
  fn to_json(&self) -> Value;
}

impl<T> ToJson for T
where
  T: Clone,
  Value: From<T>,
{
  fn to_json(&self) -> Value {
    Value::from(self.clone())
  }
}

fn component_values_to_json(input: &mut Parser) -> Vec<Value> {
  let mut values = vec![];
  while let Ok(token) = input.next_including_whitespace().map(|t| t.clone()) {
    values.push(serialize_token(input, token));
  }
  values
}

fn serialize_token(input: &mut Parser, token: Token) -> Value {
  fn numeric(value: f32, int_value: Option<i32>, has_sign: bool) -> Vec<Value> {
    vec![
      Token::Number {
        value: value,
        int_value: int_value,
        has_sign: has_sign,
      }
      .to_css_string()
      .to_json(),
      match int_value {
        Some(i) => i.to_json(),
        None => value.to_json(),
      },
      match int_value {
        Some(_) => "integer",
        None => "number",
      }
      .to_json(),
    ]
  }

  fn nested(input: &mut Parser) -> Vec<Value> {
    let result: Result<_, ParseError<()>> =
      input.parse_nested_block(|input| Ok(component_values_to_json(input)));
    result.unwrap()
  }
  match token {
    Token::Ident(value) => JArray!["ident", &*value],
    Token::AtKeyword(value) => JArray!["at-keyword", &*value],
    Token::Hash(value) => JArray!["hash", &*value, "unrestricted"],
    Token::IDHash(value) => JArray!["hash", &*value, "id"],
    Token::QuotedString(value) => JArray!["string", &*value],
    Token::UnquotedUrl(value) => JArray!["url", &*value],
    Token::Delim('\\') => "\\".to_json(),
    Token::Delim(value) => value.to_string().to_json(),

    Token::Number {
      value,
      int_value,
      has_sign,
    } => Value::Array({
      let mut v = vec!["number".to_json()];
      v.extend(numeric(value, int_value, has_sign));
      v
    }),
    Token::Percentage {
      unit_value,
      int_value,
      has_sign,
    } => Value::Array({
      let mut v = vec!["percentage".to_json()];
      v.extend(numeric(unit_value * 100., int_value, has_sign));
      v
    }),
    Token::Dimension {
      value,
      int_value,
      has_sign,
      unit,
    } => Value::Array({
      let mut v = vec!["dimension".to_json()];
      v.extend(numeric(value, int_value, has_sign));
      v.push((&*unit).to_json());
      v
    }),

    Token::WhiteSpace(_) => " ".to_json(),
    Token::Comment(_) => "/**/".to_json(),
    Token::Colon => ":".to_json(),
    Token::Semicolon => ";".to_json(),
    Token::Comma => ",".to_json(),
    Token::IncludeMatch => "~=".to_json(),
    Token::DashMatch => "|=".to_json(),
    Token::PrefixMatch => "^=".to_json(),
    Token::SuffixMatch => "$=".to_json(),
    Token::SubstringMatch => "*=".to_json(),
    Token::CDO => "<!--".to_json(),
    Token::CDC => "-->".to_json(),

    Token::Function(name) => Value::Array({
      let mut v = vec!["function".to_json(), (&*name).to_json()];
      v.extend(nested(input));
      v
    }),
    Token::ParenthesisBlock => Value::Array({
      let mut v = vec!["()".to_json()];
      v.extend(nested(input));
      v
    }),
    Token::SquareBracketBlock => Value::Array({
      let mut v = vec!["[]".to_json()];
      v.extend(nested(input));
      v
    }),
    Token::CurlyBracketBlock => Value::Array({
      let mut v = vec!["{}".to_json()];
      v.extend(nested(input));
      v
    }),
    Token::BadUrl(_) => JArray!["error", "bad-url"],
    Token::BadString(_) => JArray!["error", "bad-string"],
    Token::CloseParenthesis => JArray!["error", ")"],
    Token::CloseSquareBracket => JArray!["error", "]"],
    Token::CloseCurlyBracket => JArray!["error", "}"],
  }
}
#[wasm_bindgen(js_name = "parseSync")]
pub fn parse_sync(input: String) -> JsValue {
  console_error_panic_hook::set_once();
  let mut tokens: Vec<Value> = vec![];
  let mut input = ParserInput::new(&input);
  let mut parser = Parser::new(&mut input);
  loop {
    match parser.next_including_whitespace() {
      Ok(t) => {
        let token = t.clone();
        tokens.push(serialize_token(&mut parser, token));
      }
      Err(e) => break,
    }
  }

  JsValue::from_serde(&tokens).unwrap()
}
