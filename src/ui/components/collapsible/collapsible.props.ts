import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type CollapsibleIconState = object
export type CollapsibleContentState = object

export type {
	CollapsibleRootProps,
	CollapsibleRootState,
	CollapsibleRootChangeEventReason,
	CollapsibleRootChangeEventDetails,
	CollapsibleTriggerProps,
	CollapsibleTriggerState,
	CollapsiblePanelProps,
	CollapsiblePanelState,
} from "@base-ui/react/collapsible"

export type CollapsibleIconProps = BaseUIComponentProps<"span", CollapsibleIconState>
export type CollapsibleContentProps = BaseUIComponentProps<"div", CollapsibleContentState>