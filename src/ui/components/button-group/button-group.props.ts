import type { BaseUIComponentProps } from "@base-ui/react/internals/types"
import type { ButtonGroupState } from "./button-group.types"

export type ButtonGroupProps = BaseUIComponentProps<"div", ButtonGroupState> & {
	/**
	 * Whether the component should ignore user interaction.
	 * @default false
	 */
	disabled?: boolean
	/**
	 * If `true`, the component will be styled as a square or circle
	 * to accommodate only an icon, adjusting padding and aspect ratio.
	 */
	iconOnly?: boolean
	/**
	 * If `true`, the component will take up the full width of its container.
	 */
	fullWidth?: boolean
	/**
	 * The visual style of the component.
	 * @default "primary"
	 */
	variant?: "primary" | "secondary" | "outline" | "ghost"
	/**
	 * The size of the component, affecting padding, font size, and height.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg"
	/**
	 * The color theme of the component.
	 * @default "info"
	 */
	color?: "neutral" | "info" | "success" | "warning" | "error"
}