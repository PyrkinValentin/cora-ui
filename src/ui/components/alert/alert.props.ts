import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type AlertRootProps = BaseUIComponentProps<"div", unknown> & {
	/**
	 * The visual status of the component.
	 * @default "neutral"
	 */
	status?: "neutral" | "info" | "success" | "warning" | "error"
}

export type AlertIndicatorProps = BaseUIComponentProps<"span", unknown>
export type AlertContentProps = BaseUIComponentProps<"div", unknown>
export type AlertTitleProps = BaseUIComponentProps<"div", unknown>
export type AlertDescriptionProps = BaseUIComponentProps<"p", unknown>