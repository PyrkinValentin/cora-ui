import type { ButtonProps, ButtonState } from "@base-ui/react/button"
import type { UIComponentProps } from "../../types"

export type AlertRootState = object
export type AlertRootProps = UIComponentProps<"div", AlertRootState>

export type AlertIndicatorState = object
export type AlertIndicatorProps = UIComponentProps<"span", AlertIndicatorState> & {
	/**
	 * The visual status of the component.
	 * @default "neutral"
	 */
	status?: "neutral" | "info" | "success" | "warning" | "error"
}

export type AlertContentState = object
export type AlertContentProps = UIComponentProps<"div", AlertContentState>

export type AlertTitleState = object
export type AlertTitleProps = UIComponentProps<"div", AlertTitleState>

export type AlertDescriptionState = object
export type AlertDescriptionProps = UIComponentProps<"p", AlertDescriptionState>

export type AlertCloseState = ButtonState
export type AlertCloseProps = ButtonProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default true
	 */
	nativeClose?: boolean
}