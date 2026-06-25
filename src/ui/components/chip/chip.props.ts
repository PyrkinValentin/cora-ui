import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type ChipState = object

export type ChipProps = BaseUIComponentProps<"span", ChipState> & {
	/**
	 * The visual style of the component.
	 * @default "primary"
	 */
	variant?: "primary" | "secondary"
	/**
	 * The color theme of the component.
	 * @default "neutral"
	 */
	color?: "neutral" | "info" | "success" | "warning" | "error"
}