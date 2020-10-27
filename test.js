import parse from "./parser.js";

var ast = parse('p { color: black; }');
console.log(ast)
