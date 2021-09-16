import { encode } from "https://deno.land/std@0.103.0/encoding/base64.ts";
import * as lz4 from "https://deno.land/x/lz4@v0.1.2/mod.ts";

const encoder = new TextEncoder();
const wasm = await Deno.readFile(`pkg/css_parser_bg.wasm`);

const compressed = lz4.compress(wasm);
const encoded = encode(compressed);
const source = `import * as lz4 from "https://deno.land/x/lz4@v0.1.2/mod.ts";export const source=lz4.decompress(Uint8Array.from(atob("${encoded}"),c=>c.charCodeAt(0)));`;

await Deno.writeFile("wasm.js", encoder.encode(source));
