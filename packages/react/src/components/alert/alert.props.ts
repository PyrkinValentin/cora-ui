import type { ButtonProps, ButtonState } from "@base-ui/react/button"
import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type AlertRootState = object

export type AlertRootProps = BaseUIComponentProps<"div", AlertRootState>

export type AlertIndicatorState = object

export type AlertIndicatorProps = BaseUIComponentProps<"span", AlertIndicatorState> & {
	/**
	 * The visual status of the component.
	 * @default "neutral"
	 */
	status?: "neutral" | "info" | "success" | "warning" | "error"
}

export type AlertContentState = object

export type AlertContentProps = BaseUIComponentProps<"div", AlertContentState>

export type AlertTitleState = object

export type AlertTitleProps = BaseUIComponentProps<"h2", AlertTitleState>

export type AlertDescriptionState = object

export type AlertDescriptionProps = BaseUIComponentProps<"p", AlertDescriptionState>

export type AlertCloseState = ButtonState

export type AlertCloseProps = ButtonProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default true
	 */
	nativeClose?: boolean
}