import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type AccordionIconState = object
export type AccordionContentState = object

export type {
	AccordionRootProps,
	AccordionRootState,
	AccordionRootChangeEventReason,
	AccordionRootChangeEventDetails,
	AccordionItemProps,
	AccordionItemState,
	AccordionItemChangeEventReason,
	AccordionItemChangeEventDetails,
	AccordionHeaderProps,
	AccordionHeaderState,
	AccordionTriggerProps,
	AccordionTriggerState,
	AccordionPanelProps,
	AccordionPanelState,
	AccordionValue,
} from "@base-ui/react/accordion"

export type AccordionIconProps = BaseUIComponentProps<"span", AccordionIconState>
export type AccordionContentProps = BaseUIComponentProps<"div", AccordionContentState>