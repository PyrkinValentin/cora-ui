import type { BaseUIComponentProps } from "@base-ui/react/internals/types"
import type { BadgeRootState } from "./badge.types"

export type BadgeRootProps = BaseUIComponentProps<"span", BadgeRootState> & {
	/**
	 * If `true`, the badge is hidden.
	 * @default false
	 */
	invisible?: boolean
	/**
	 * The side of the anchor the component is placed on.
	 * @default "top"
	 */
	side?: "top" | "bottom"
	/**
	 * The alignment of the component relative to the anchor.
	 * @default "end"
	 */
	align?: "start" | "center" | "end"
	/**
	 * The size of the component, affecting padding, font size, and height.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg"
	/**
	 * The visual status of the component.
	 * @default "neutral"
	 */
	status?: "neutral" | "info" | "success" | "warning" | "error"
}

export type BadgeIndicatorProps = BaseUIComponentProps<"span", BadgeRootState>