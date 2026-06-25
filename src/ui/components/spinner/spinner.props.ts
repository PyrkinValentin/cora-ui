import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type SpinnerState = object

export type SpinnerProps = BaseUIComponentProps<"span", SpinnerState> & {
	/**
	 * The size of the component.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg"
	/**
	 * The color theme of the component.
	 * @default "current"
	 */
	color?: "current" | "neutral" | "info" | "success" | "warning" | "error"
}