import { parse } from "./core/parser/parser.ts";
var ast = parse(
  "/* comment */ p { color: black; }",
  { position: true, comments: true },
);
console.log(ast);
