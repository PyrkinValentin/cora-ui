import { defineConfig } from "tsup"
import { copy } from "esbuild-plugin-copy"

export default defineConfig({
	clean: true,
	bundle: false,
	dts: true,
	tsconfig: "tsconfig.json",
	outDir: "build",
	format: ["esm"],
	entry: ["src/**/*.ts", "src/**/*.tsx"],
	external: [
		"react",
		"react-dom",
		"react/jsx-runtime",
		"tailwindcss",
		"@base-ui/react",
	],
	esbuildPlugins: [
		copy({
			assets: {
				from: ["./src/styles/**/*.css"],
				to: ["./styles"],
			},
		}) as any,
	],
})