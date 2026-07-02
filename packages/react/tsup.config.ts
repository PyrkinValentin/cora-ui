import { defineConfig } from "tsup"
import { copy } from "esbuild-plugin-copy"
import { postBuild } from "./scripts/post-build.js"

export default defineConfig({
	clean: true,
	bundle: true,
	dts: true,
	splitting: true,
	skipNodeModulesBundle: true,
	tsconfig: "tsconfig.json",
	outDir: "build",
	format: ["esm"],
	entry: {
		index: "src/index.ts",
		hooks: "src/hooks/index.ts",
		utils: "src/utils/index.ts",
	},
	onSuccess: () => postBuild(),
	esbuildPlugins: [
		copy({
			assets: {
				from: ["./src/styles/**/*.css"],
				to: ["./styles"],
			},
		}) as any,
	],
})