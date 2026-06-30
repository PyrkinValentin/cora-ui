"use client"

import { useTheme } from "@teispace/next-themes"
import { Button } from "@cora-ui/react"
import { Moon, Sun } from "lucide-react"

/**
 * Floating light/dark theme switch for the demo, backed by the layout's ThemeProvider.
 */
export const ThemeToggle = () => {
	const { resolvedTheme, setTheme } = useTheme()
	const isDark = resolvedTheme === "dark"

	return (
		<Button
			iconOnly
			size="sm"
			variant="ghost"
			aria-label="Toggle theme"
			className="fixed top-4 right-4 z-50"
			onClick={() => setTheme(isDark ? "light" : "dark")}
		>
			{isDark ? <Sun/> : <Moon/>}
		</Button>
	)
}
