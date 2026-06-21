import type { MouseEvent } from "react"
import type { BaseUIEvent } from "@base-ui/react"

const SELECTABLE_INPUT_TYPES = ["text", "email", "search", "tel", "url", "password"]
const DEFAULT_SELECTORS = "button, a, select, [role='button'], [tabindex]"
const TARGET_SELECTORS = "input:not([type='hidden']), textarea"

export const focusSlot = (ev: BaseUIEvent<MouseEvent<HTMLElement>>) => {
	const target = ev.target as HTMLElement

	if (target.closest(DEFAULT_SELECTORS)) return

	const field = ev
		.currentTarget
		.querySelector<HTMLInputElement | HTMLTextAreaElement>(TARGET_SELECTORS)

	if (
		field &&
		target !== field &&
		!field.disabled &&
		!field.readOnly
	) {
		ev.preventDefault()
		field.focus({ preventScroll: true })

		const selectable = field.tagName === "TEXTAREA" || SELECTABLE_INPUT_TYPES.includes(field.type)
		const length = field.value.length

		if (selectable && length > 0) {
			field.setSelectionRange(length, length)
		}
	}
}