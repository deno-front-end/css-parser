import * as lz4 from "https://deno.land/x/lz4@v0.1.2/mod.ts";
import init, { parseSync } from "../pkg/css_parser.js";
import { source } from "../wasm.js";

await init(source);

export {
    parseSync,
};