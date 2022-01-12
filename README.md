# `css_parser`
CSS Lexer & Parser implementation for Deno

### Usage

Parse CSS to AST -
```typescript
import { parse } from "https://deno.land/x/css@0.3.0/mod.ts";

let ast = parse("/* comment */ p { color: black; }", {/* OPTIONS */})
// {
//   type: "stylesheet",
//   stylesheet: {
//     rules: [
//       { type: "comment", text: " comment ", position: [Object] },
//       { type: "rule", selectors: [Array], declarations: [Array], position: [Object] }
//     ]
// }
```
