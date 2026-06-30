import { readdirSync, existsSync, writeFileSync, mkdirSync, rmSync } from "node:fs"
import { execFileSync } from "node:child_process"

// Emit a standalone, minified stylesheet per component so consumers can pull in only the
// components they use (e.g. `@cora-ui/react/accordion/styles`). @reference makes Tailwind +
// theme + custom utilities available for @apply resolution WITHOUT emitting preflight or the
// token :root dump — so each file contains only that component's rules (referencing var(--token)).
// Design tokens come separately from `./theme` or `./styles`.

const COMPONENTS_DIR = "src/components"

const components = readdirSync(COMPONENTS_DIR, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name)
	.filter((name) => existsSync(`${COMPONENTS_DIR}/${name}/${name}.styles.css`))

for (const name of components) {
	const entryFile = `_component-${name}.css`

	writeFileSync(entryFile, [
		`@reference "tailwindcss";`,
		`@reference "./src/styles/theme.css";`,
		`@reference "./src/styles/animations.css";`,
		`@reference "./src/styles/utils.css";`,
		``,
		`@import "./src/components/${name}/${name}.styles.css";`,
		``,
	].join("\n"))

	mkdirSync(`build/components/${name}`, { recursive: true })

	try {
		execFileSync("tailwindcss", [
			"-i", entryFile,
			"-o", `build/components/${name}/styles.css`,
			"--minify",
		], { stdio: "pipe" })
	} finally {
		rmSync(entryFile, { force: true })
	}
}

console.log(`Built per-component CSS for ${components.length} components.`)
