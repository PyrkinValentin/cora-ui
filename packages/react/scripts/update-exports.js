import fs from "node:fs"
import path from "node:path"

const pkgPath = path.resolve("package.json")
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"))

const componentsDir = path.resolve("build/components")

const components = fs
	.readdirSync(componentsDir)
	.filter((file) => (
		fs
			.statSync(path.join(componentsDir, file))
			.isDirectory()
	))

pkg.exports = {
	".": {
		"types": "./build/index.d.ts",
		"import": "./build/index.js",
		"default": "./build/index.js"
	},
	"./hooks": {
		"types": "./build/hooks/index.d.ts",
		"import": "./build/hooks/index.js"
	},
	"./utils": {
		"types": "./build/utils/index.d.ts",
		"import": "./build/utils/index.js"
	},
	"./styles": "./build/styles/styles.css"
};

components.forEach(comp => {
	pkg.exports[`./${comp}`] = {
		"types": `./build/components/${comp}/index.d.ts`,
		"import": `./build/components/${comp}/index.js`,
		"default": `./build/components/${comp}/index.js`
	}
})

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n")
console.log('✅ package.json exports updated successfully!')