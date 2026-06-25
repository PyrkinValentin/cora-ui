import type { InputState, InputProps } from "@base-ui/react/input"
import type { BaseUIComponentProps } from "@base-ui/react/internals/types"
import type { BaseUIChangeEventDetails } from "@base-ui/react/internals/createBaseUIEventDetails"
import type { REASONS } from "../../constants"

export type TextareaState = InputState
export type TextareaChangeEventReason = typeof REASONS.none
export type TextareaChangeEventDetails = BaseUIChangeEventDetails<TextareaChangeEventReason>

export type TextareaProps = BaseUIComponentProps<"textarea", TextareaState> & Pick<InputProps, "defaultValue"> & {
	/**
	 * Automatically grows the height to fit the content.
	 * @default false
	 */
	autoResize?: boolean
	/**
	 * Callback fired when the `value` changes. Use when controlled.
	 */
	onValueChange?: (value: string, eventDetails: TextareaChangeEventDetails) => void
}