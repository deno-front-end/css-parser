import { parse } from "../core/parser/parser.ts";
import { comment } from "./fixtures.js";
import { assertEquals, assertObjectMatch } from "./deps.ts";

for (let i = 0; i < comment.length; i++) {
  Deno.test(`[parse] - comments (${i})`, function () {
    let ast = parse(comment[i].css, { comments: true });
    assertEquals(ast, comment[i].ast);
  });
}

Deno.test(`[parse] bootstrap.css`, async function () {
  const source = await Deno.readTextFile(
    "./testing/bootstrap_3.3.7/bootstrap.css",
  );
  const expected_ast = await import("./bootstrap_3.3.7/bootstrap.css.ast.js")
  let ast = parse(source, {});
  
  // For dumping new AST for bootstrap.css
  // await Deno.writeTextFile("./testing/bootstrap_3.3.7/bootstrap.css.ast.js", JSON.stringify(ast));
  //
  // TODO(littledivy): Better assertion for ASTs

  assertEquals(Object.keys(ast), Object.keys(expected_ast.default));
});
