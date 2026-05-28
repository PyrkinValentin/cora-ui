import type { ReactNode } from "react"
import type { ButtonGroupProps } from "./button-group.props"

export type ButtonGroupState = {
	disabled: boolean
}

type ButtonVariant = NonNullable<ButtonGroupProps["variant"]>
type ButtonSize = NonNullable<ButtonGroupProps["size"]>
type ButtonColor = NonNullable<ButtonGroupProps["color"]>

export type ButtonGroupContextValue = {
	group?: boolean
	disabled?: boolean
	iconOnly?: boolean
	fullWidth?: boolean
	variant?: ButtonVariant
	size?: ButtonSize
	color?: ButtonColor
}

export type ButtonGroupProviderProps = ButtonGroupContextValue & {
	children: ReactNode
}