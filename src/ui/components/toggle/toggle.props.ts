import type { ToggleProps as BaseToggleProps } from "@base-ui/react/toggle"

export type { ToggleState, ToggleChangeEventReason, ToggleChangeEventDetails } from "@base-ui/react/toggle"

export type ToggleProps<Value extends string> = BaseToggleProps<Value> & {
	/**
	 * If `true`, the component will be styled as a square or circle
	 * to accommodate only an icon, adjusting padding and aspect ratio.
	 * @default false
	 */
	iconOnly?: boolean
	/**
	 * The visual style of the component.
	 * @default "secondary"
	 */
	variant?: "secondary" | "ghost"
	/**
	 * The size of the component.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg"
	/**
	 * The color theme of the component.
	 * @default "info"
	 */
	color?: "info" | "success" | "warning" | "error"
}