import type { ButtonProps } from "@base-ui/react/button"
import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type AlertRootState = object
type AlertIndicatorState = object
type AlertContentState = object
type AlertTitleState = object
type AlertDescriptionState = object

export type AlertRootProps = BaseUIComponentProps<"div", AlertRootState>

export type AlertIndicatorProps = BaseUIComponentProps<"span", AlertIndicatorState> & {
	/**
	 * The visual status of the component.
	 * @default "neutral"
	 */
	status?: "neutral" | "info" | "success" | "warning" | "error"
}

export type AlertContentProps = BaseUIComponentProps<"div", AlertContentState>
export type AlertTitleProps = BaseUIComponentProps<"h2", AlertTitleState>
export type AlertDescriptionProps = BaseUIComponentProps<"p", AlertDescriptionState>

export type AlertCloseProps = ButtonProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default true
	 */
	nativeClose?: boolean
}