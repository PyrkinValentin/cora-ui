import type {
	DrawerViewportProps as BaseDrawerViewportProps,
	DrawerPopupProps as BaseDrawerPopupProps,
	DrawerCloseProps as BaseDrawerCloseProps,
} from "@base-ui/react/drawer"

import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type DrawerHandleState = object
export type DrawerActionsState = object

export type {
	DrawerRootProps,
	DrawerRootState,
	DrawerRootActions,
	DrawerRootChangeEventReason,
	DrawerRootChangeEventDetails,
	DrawerRootSnapPointChangeEventReason,
	DrawerRootSnapPointChangeEventDetails,
	DrawerTriggerProps,
	DrawerTriggerState,
	DrawerSwipeAreaProps,
	DrawerSwipeAreaState,
	DrawerPortalProps,
	DrawerPortalState,
	DrawerBackdropProps,
	DrawerBackdropState,
	DrawerPopupState,
	DrawerContentProps,
	DrawerContentState,
	DrawerTitleProps,
	DrawerTitleState,
	DrawerDescriptionProps,
	DrawerDescriptionState,
	DrawerVirtualKeyboardProviderProps,
	DrawerCloseState,
} from "@base-ui/react/drawer"

export type DrawerViewportProps = BaseDrawerViewportProps & {
	/**
	 * The positioning of the component on the screen.
	 * @default "bottom"
	 */
	position?: "top" | "bottom" | "left" | "right"
}

export type DrawerPopupProps = BaseDrawerPopupProps & {
	/**
	 * Disables swipe-to-close behavior for specific descendant elements.
	 */
	swipeIgnore?: boolean
	/**
	 * The size of the component.
	 * @note Only applies when `position` is `"left"` or `"right"`.
	 * @default "sm"
	 */
	size?: "sm" | "md" | "lg" | "full"
}

export type DrawerHandleProps = BaseUIComponentProps<"span", DrawerHandleState>
export type DrawerActionsProps = BaseUIComponentProps<"div", DrawerActionsState>

export type DrawerCloseProps = BaseDrawerCloseProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default false
	 */
	nativeClose?: boolean
}