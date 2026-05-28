import type { MouseEvent } from "react"
import type { BaseUIEvent } from "@base-ui/react"

export const focusInputSlot = (ev: BaseUIEvent<MouseEvent<HTMLDivElement>>, input: HTMLInputElement) => {
	const target = ev.target as HTMLDivElement

	if (target.closest("button, [role='button'], a, input, select, textarea")) return

	if (input && !input.contains(target)) {
		ev.preventDefault()
		input.focus({ preventScroll: true })
	}
}