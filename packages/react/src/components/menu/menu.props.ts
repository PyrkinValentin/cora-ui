import type { MenuItemProps as BaseMenuItemProps } from "@base-ui/react/menu"

export type {
	SeparatorProps as MenuSeparatorProps,
	SeparatorState as MenuSeparatorState,
} from "@base-ui/react/separator"

export type {
	MenuFilterProviderProps,
	MenuFilterProviderState,
	MenuFilterProviderChangeEventReason,
	MenuFilterProviderChangeEventDetails,
	MenuRootProps,
	MenuRootState,
	MenuRootActions,
	MenuRootOrientation,
	MenuRootChangeEventReason,
	MenuRootChangeEventDetails,
	MenuTriggerProps,
	MenuTriggerState,
	MenuPortalProps,
	MenuPortalState,
	MenuBackdropProps,
	MenuBackdropState,
	MenuPositionerProps,
	MenuPositionerState,
	MenuPopupProps,
	MenuPopupState,
	MenuArrowProps,
	MenuArrowState,
	MenuInputProps,
	MenuInputState,
	MenuClearProps,
	MenuClearState,
	MenuEmptyProps,
	MenuEmptyState,
	MenuViewportProps,
	MenuViewportState,
	MenuItemState,
	MenuLinkItemProps,
	MenuLinkItemState,
	MenuSubmenuRootProps,
	MenuSubmenuRootState,
	MenuSubmenuRootChangeEventReason,
	MenuSubmenuRootChangeEventDetails,
	MenuSubmenuTriggerProps,
	MenuSubmenuTriggerState,
	MenuGroupProps,
	MenuGroupState,
	MenuGroupLabelProps,
	MenuGroupLabelState,
	MenuRadioGroupProps,
	MenuRadioGroupState,
	MenuRadioGroupChangeEventReason,
	MenuRadioGroupChangeEventDetails,
	MenuRadioItemProps,
	MenuRadioItemState,
	MenuRadioItemIndicatorProps,
	MenuRadioItemIndicatorState,
	MenuCheckboxItemProps,
	MenuCheckboxItemState,
	MenuCheckboxItemChangeEventReason,
	MenuCheckboxItemChangeEventDetails,
	MenuCheckboxItemIndicatorProps,
	MenuCheckboxItemIndicatorState,
	MenuParent,
} from "@base-ui/react/menu"

export type MenuItemProps = BaseMenuItemProps & {
	/**
	 * The visual style of the component.
	 * @default "primary"
	 */
	variant?: "primary" | "error"
}