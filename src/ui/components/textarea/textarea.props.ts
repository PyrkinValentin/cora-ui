import type { InputState, InputProps } from "@base-ui/react/input"
import type { BaseUIComponentProps } from "@base-ui/react/internals/types"
import type { BaseUIChangeEventDetails } from "@base-ui/react/internals/createBaseUIEventDetails"
import type { REASONS } from "../../constants"

type TextareaState = InputState
type TextareaChangeEventDetails = BaseUIChangeEventDetails<typeof REASONS.none>

export type TextareaProps = BaseUIComponentProps<"textarea", TextareaState> & Pick<InputProps, "defaultValue"> & {
	/**
	 * Automatically grows the height to fit the content.
	 * @default true
	 */
	autoResize?: boolean
	/**
	 * Callback fired when the `value` changes. Use when controlled.
	 */
	onValueChange?: (value: string, eventDetails: TextareaChangeEventDetails) => void
}