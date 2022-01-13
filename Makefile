build:
	wasm-pack build --target web --release
	deno run -A build.js