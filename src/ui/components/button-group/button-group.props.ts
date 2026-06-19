import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type ButtonGroupState = object

export type ButtonGroupProps = BaseUIComponentProps<"div", ButtonGroupState> & {
	/**
	 * If `true`, the component will be styled as a square or circle
	 * to accommodate only an icon, adjusting padding and aspect ratio.
	 * @default false
	 */
	iconOnly?: boolean
	/**
	 * @default "horizontal"
	 */
	orientation?: "horizontal" | "vertical"
	/**
	 * The visual style of the component.
	 * @default "primary"
	 */
	variant?: "primary" | "secondary" | "outline" | "ghost" | "error"
	/**
	 * The size of the component.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg"
}