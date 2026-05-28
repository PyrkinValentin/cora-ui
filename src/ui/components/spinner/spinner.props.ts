import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type SpinnerProps = BaseUIComponentProps<"span", unknown> & {
	/**
	 * The size of the component, affecting padding, font size, and height.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg" | "xl" | "2xl"
	/**
	 * The color theme of the component.
	 * @default "current"
	 */
	color?: "current" | "neutral" | "info" | "success" | "warning" | "error"
}