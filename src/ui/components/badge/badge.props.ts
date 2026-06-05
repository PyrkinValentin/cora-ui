import type { UIComponentProps } from "../../types"

export type BadgeRootState = object
export type BadgeRootProps = UIComponentProps<"span", BadgeRootState>

export type BadgeIndicatorState = {
	/**
	 * If `true`, the component is hidden.
	 */
	invisible: boolean
}

export type BadgeIndicatorProps = UIComponentProps<"span", BadgeIndicatorState> & {
	/**
	 * If `true`, the component is hidden.
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
	 * The size of the component.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg"
	/**
	 * The visual status of the component.
	 * @default "neutral"
	 */
	status?: "neutral" | "info" | "success" | "warning" | "error"
}