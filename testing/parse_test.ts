import { parse } from "../core/parser/parser.ts";
import { comment } from "./fixtures.js";
import { assertEquals } from "./deps.ts";

for (let i = 0; i < comment.length; i++) {
  Deno.test(`[parse] - comments (${i})`, function () {
    let ast = parse(comment[i].css, { comments: true });
    assertEquals(ast, comment[i].ast);
  });
}
