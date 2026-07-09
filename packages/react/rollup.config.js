import path from "path"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import typescript from "@rollup/plugin-typescript"
import copy from "rollup-plugin-copy"
import glob from "fast-glob"
import pkg from "./package.json" with { type: "json" }

const externalDependencies = [
	...Object.keys(pkg.peerDependencies || {}),
	...Object.keys(pkg.dependencies || {}),
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

const componentInputs = Object.fromEntries(
	glob
		.sync("src/components/*/index.ts")
		.map((file) => [
			path.relative("src", file.slice(0, file.length - path.extname(file).length)),
			file,
		])
)

export default {
	input: {
		index: "src/index.ts",
		"hooks/index": "src/hooks/index.ts",
		"utils/index": "src/utils/index.ts",
		...componentInputs,
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
			declarationDir: "build",
			compilerOptions: {
				outDir: "build",
				declarationMap: false,
			},
		}),
		copy({
			targets: [
				{
					src: "src/**/*.css",
					dest: "build",
					rename: (name, extension, fullPath) => {
						return path.relative("src", fullPath)
					},
				},
			],
			hook: "writeBundle",
		}),
	],
};