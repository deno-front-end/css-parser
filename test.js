import parse from "./parser/parser.ts";

var ast = parse("p { color: black; }");
console.log(ast);
