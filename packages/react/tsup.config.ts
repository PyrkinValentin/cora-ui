import { defineConfig } from "tsup"

export default defineConfig({
	entry: ["src/index.ts", "src/hooks/index.ts", "src/utils/index.ts", "src/styles/styles.css"],
	format: ["esm"],
	dts: true,
	clean: true,
	splitting: false,
	minify: false,
	outDir: "build",
	skipNodeModulesBundle: true,
	tsconfig: "tsconfig.json",
	banner: {
		js: '"use client";',
	},
	external: [
		"react",
		"react-dom",
		"react/jsx-runtime",
		"@base-ui/react",
		"tailwindcss"
	]
});