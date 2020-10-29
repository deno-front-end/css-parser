import { parse } from "./core/parser/parser.ts";
const ast = parse("/* comment */ p { color: black; }", {
  position: true,
  comments: true,
});
console.log(ast);
