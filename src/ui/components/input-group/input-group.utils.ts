import type { MouseEvent } from "react"
import type { BaseUIEvent } from "@base-ui/react"

import { INPUT_GROUP_SELECTABLE_TYPES } from "./input-group.constants"

export const focusInputSlot = (ev: BaseUIEvent<MouseEvent<HTMLDivElement>>) => {
	const target = ev.target as HTMLElement

	if (target.closest("button, a, select, textarea, [role='button'], [tabindex]")) return

	const input = ev
		.currentTarget
		.querySelector<HTMLInputElement>("input:not([type='hidden'])")

	if (
		input &&
		target !== input &&
		!input.disabled
	) {
		ev.preventDefault()
		input.focus({ preventScroll: true })

		const selectable = INPUT_GROUP_SELECTABLE_TYPES.includes(input.type)

		if (selectable) {
			const length = input.value.length

			input.setSelectionRange(length, length)
		}
	}
}