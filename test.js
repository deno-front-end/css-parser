import parse from "./lexer.ts";

var ast = parse('p { color: black; }');
console.log(ast)
