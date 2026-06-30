import js from "@eslint/js"
import tseslint from "typescript-eslint"
import reactHooks from "eslint-plugin-react-hooks"

export default tseslint.config(
	{
		ignores: ["build/**", "node_modules/**"],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		// Register the plugin so all its rule names (incl. the React Compiler rules referenced by
		// inline disable comments) are defined; enable the standard hooks rules.
		plugins: {
			"react-hooks": reactHooks,
		},
		linterOptions: {
			reportUnusedDisableDirectives: "off",
		},
		rules: {
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
			// The library leans on a few deliberate patterns; keep lint focused on real issues.
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-empty-object-type": "off",
			"@typescript-eslint/no-unused-vars": [
				"warn",
				{ argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
			],
		},
	},
)
