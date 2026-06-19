import type { BaseUIComponentProps } from "@base-ui/react/internals/types"
import type { ButtonProps } from "../button/button.props"

type ButtonGroupState = object

export type ButtonGroupProps =
	BaseUIComponentProps<"div", ButtonGroupState>
	& Pick<ButtonProps, "iconOnly" | "variant" | "size">
	& {
	/**
	 * The orientation of the component.
	 * @default "horizontal"
	 */
	orientation?: "horizontal" | "vertical"
}