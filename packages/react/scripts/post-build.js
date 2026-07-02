import { readFile, writeFile, readdir } from "fs/promises"
import { join } from "path"

export async function postBuild() {
	const buildDir = join(process.cwd(), "build")

	try {
		try {
			const cssPath = join(buildDir, "styles", "styles.css")
			const rawCss = await readFile(cssPath, "utf8")
			const modifiedCss = rawCss.replace(/@import\s+['"]tailwindcss['"];?\s*/g, "")

			await writeFile(cssPath, modifiedCss, "utf8")

			console.log("✅ styles.css successfully cleaned from Tailwind import.")
		} catch (cssError) {
			console.warn("⚠️ Failed to clean styles.css:", cssError.message)
		}

		const files = await readdir(buildDir)

		for (const fileName of files) {
			const isTargetJsFile =
				(fileName.startsWith("index.") || fileName.startsWith("hooks.")) &&
				(fileName.endsWith(".js") || fileName.endsWith(".mjs"))

			if (isTargetJsFile) {
				const jsPath = join(buildDir, fileName)
				const rawJs = await readFile(jsPath, "utf8")
				const modifiedJs = `"use client";\n${rawJs}`

				await writeFile(jsPath, modifiedJs, "utf8")

				console.log(`✅ "use client" successfully injected into ${fileName}`)
			}
		}

	} catch (error) {
		console.error("❌ Error during post-build processing:", error)

		process.exit(1)
	}
}