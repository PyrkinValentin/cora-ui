import { createRequire } from "module"
import { fileURLToPath } from "url"
import path from "path"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import copy from "rollup-plugin-copy"

const require = createRequire(import.meta.url)
const pkg = require("./package.json")

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const externalDependencies = [
	...Object.keys(pkg.dependencies || {}),
	...Object.keys(pkg.peerDependencies || {}),
]

function preserveUseClient() {
	const filesWithUseClient = new Set()

	return {
		name: "preserve-use-client",
		transform(code, id) {
			const codeTrimmed = code.trim()

			if (
				codeTrimmed.startsWith('"use client"') ||
				codeTrimmed.startsWith("'use client'")
			) {
				filesWithUseClient.add(id)
			}

			return null
		},
		renderChunk(code, chunk) {
			const hasDirective = Object
				.keys(chunk.modules)
				.some((id) => filesWithUseClient.has(id))

			if (hasDirective) {
				return {
					code: '"use client";\n' + code,
					map: null
				}
			}
			return null
		}
	}
}

export default {
	input: {
		index: "src/index.ts",
		"hooks/index": "src/hooks/index.ts",
		"utils/index": "src/utils/index.ts",
	},
	external: (id) => {
		if (
			id.endsWith(".css") ||
			id === "react" ||
			id.startsWith("react/")
		) {
			return true
		}

		if (
			id === "src/index.ts" ||
			id.startsWith(".") ||
			id.startsWith("/") ||
			id.includes("src/") ||
			id.includes("build/")
		) {
			return false
		}

		return externalDependencies.some((dep) => id === dep || id.startsWith(`${dep}/`))
	},
	output: [
		{
			preserveModules: true,
			preserveModulesRoot: "src",
			dir: "build",
			format: "esm",
			entryFileNames: "[name].js",
		}
	],
	onwarn(warning, warn) {
		if (
			warning.code === "MODULE_LEVEL_DIRECTIVE" &&
			warning.message.includes("use client")
		) {
			return
		}

		warn(warning)
	},
	plugins: [
		preserveUseClient(),
		resolve(),
		commonjs(),
		typescript({
			tsconfig: "./tsconfig.json",
			declaration: true,
			rootDir: "src",
			declarationDir: path.resolve(__dirname, "build"),
			compilerOptions: {
				outDir: path.resolve(__dirname, "build"),
				declarationMap: false,
			},
		}),
		copy({
			targets: [
				{
					src: "src/**/*.css",
					dest: "build",
					rename: (name, extension, fullPath) => {
						return path.relative(path.resolve(__dirname, "src"), fullPath)
					},
				},
			],
			hook: "writeBundle",
		}),
	],
};