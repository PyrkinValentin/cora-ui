import type { InputProps, InputState, InputChangeEventReason, InputChangeEventDetails } from "@base-ui/react/input"
import type { UIComponentProps } from "../../types"

export type { InputChangeEventReason, InputChangeEventDetails } from "@base-ui/react/input"

export type TextareaState = InputState
export type TextareaChangeEventReason = InputChangeEventReason
export type TextareaChangeEventDetails = InputChangeEventDetails
export type TextareaProps = UIComponentProps<"textarea", TextareaState> & Pick<InputProps, "onValueChange">