import type { PopoverCloseProps as BasePopoverCloseProps } from "@base-ui/react/popover"

export type {
	PopoverRootProps,
	PopoverRootState,
	PopoverRootActions,
	PopoverRootChangeEventReason,
	PopoverRootChangeEventDetails,
	PopoverTriggerProps,
	PopoverTriggerState,
	PopoverPortalProps,
	PopoverPortalState,
	PopoverBackdropProps,
	PopoverBackdropState,
	PopoverPositionerProps,
	PopoverPositionerState,
	PopoverPopupProps,
	PopoverPopupState,
	PopoverArrowProps,
	PopoverArrowState,
	PopoverViewportProps,
	PopoverViewportState,
	PopoverTitleProps,
	PopoverTitleState,
	PopoverDescriptionProps,
	PopoverDescriptionState,
	PopoverCloseState,
} from "@base-ui/react/popover"

export type PopoverCloseProps = BasePopoverCloseProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default false
	 */
	nativeClose?: boolean
}