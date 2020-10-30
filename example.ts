import { parse, print } from "./mod.ts";
const ast = parse("/* comment */ p { color: black; }", {
  position: true,
  comments: true,
});
console.log(ast);

const printedCode = print(ast, {
  comments: true,
  compress: true,
});
console.log(printedCode);
