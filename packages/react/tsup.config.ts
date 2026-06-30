import { defineConfig } from "tsup"

// Unbundled build: each source file is compiled in place, preserving the module structure
// and — crucially — each file's own "use client" directive. This keeps client components
// client-scoped while leaving pure helpers (e.g. Avatar.getInitials) server-callable.
export default defineConfig({
	entry: ["src/**/*.ts", "src/**/*.tsx"],
	format: ["esm"],
	bundle: false,
	dts: false,
	clean: true,
	outDir: "build",
	tsconfig: "tsconfig.json",
	external: [
		"react",
		"react-dom",
		"@base-ui/react",
		"lucide-react",
	],
})
