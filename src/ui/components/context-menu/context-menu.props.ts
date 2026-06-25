import type { ContextMenuItemProps as BaseContextMenuItemProps } from "@base-ui/react/context-menu"

export type { SeparatorProps as ContextMenuSeparatorProps } from "@base-ui/react/separator"

export type {
	ContextMenuRootProps,
	ContextMenuRootState,
	ContextMenuRootActions,
	ContextMenuRootChangeEventReason,
	ContextMenuRootChangeEventDetails,
	ContextMenuTriggerProps,
	ContextMenuTriggerState,
	ContextMenuPortalProps,
	ContextMenuPortalState,
	ContextMenuBackdropProps,
	ContextMenuBackdropState,
	ContextMenuPositionerProps,
	ContextMenuPositionerState,
	ContextMenuPopupProps,
	ContextMenuPopupState,
	ContextMenuArrowProps,
	ContextMenuArrowState,
	ContextMenuItemState,
	ContextMenuLinkItemProps,
	ContextMenuLinkItemState,
	ContextMenuSubmenuRootProps,
	ContextMenuSubmenuRootState,
	ContextMenuSubmenuTriggerProps,
	ContextMenuSubmenuTriggerState,
	ContextMenuGroupProps,
	ContextMenuGroupState,
	ContextMenuGroupLabelProps,
	ContextMenuGroupLabelState,
	ContextMenuRadioGroupProps,
	ContextMenuRadioGroupState,
	ContextMenuRadioItemProps,
	ContextMenuRadioItemState,
	ContextMenuRadioItemIndicatorProps,
	ContextMenuRadioItemIndicatorState,
	ContextMenuCheckboxItemProps,
	ContextMenuCheckboxItemState,
	ContextMenuCheckboxItemIndicatorProps,
	ContextMenuCheckboxItemIndicatorState,
} from "@base-ui/react/context-menu"

export type ContextMenuItemProps = BaseContextMenuItemProps & {
	/**
	 * The visual style of the component.
	 * @default "primary"
	 */
	variant?: "primary" | "error"
}