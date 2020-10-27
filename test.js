import parse from "./parser.ts";

var ast = parse('p { color: black; }');
console.log(ast)
