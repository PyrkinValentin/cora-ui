"use client"

import type {
	MenuFilterProviderProps,
	MenuRootProps,
	MenuTriggerProps,
	MenuPortalProps,
	MenuBackdropProps,
	MenuPositionerProps,
	MenuPopupProps,
	MenuArrowProps,
	MenuViewportProps,
	MenuItemProps,
	MenuLinkItemProps,
	MenuSeparatorProps,
	MenuSubmenuRootProps,
	MenuSubmenuTriggerProps,
	MenuGroupProps,
	MenuGroupLabelProps,
	MenuRadioGroupProps,
	MenuRadioItemProps,
	MenuRadioItemIndicatorProps,
	MenuCheckboxItemProps,
	MenuCheckboxItemIndicatorProps,
} from "./menu.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Menu } from "@base-ui/react/menu"
import { Check } from "../../icons"

/**
 * Enables filtering for the menu or submenu it wraps. Add `Menu.Input` to the popup and place
 * its items in `Menu.List`.
 * Wrap each searchable submenu in its own provider.
 * Doesn't render its own HTML element.
 */
export const MenuFilterProvider = (props: MenuFilterProviderProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Menu.FilterProvider {...restProps}>
			{children}
		</Menu.FilterProvider>
	)
}

/**
 * Groups all parts of the menu.
 * Doesn't render its own HTML element.
 */
export const MenuRoot = <Payload = unknown>(props: MenuRootProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Menu.Root {...restProps}>
			{children}
		</Menu.Root>
	)
}

/**
 * A button that opens the menu.
 * Renders a `<button>` element.
 */
export const MenuTrigger = <Payload = unknown>(props: MenuTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Trigger
			{...restProps}
			className={toClassNames("menu__trigger", className)}
		>
			{children}
		</Menu.Trigger>
	)
}

/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
export const MenuPortal = (props: MenuPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Portal
			{...restProps}
			className={toClassNames("menu__portal", className)}
		>
			{children}
		</Menu.Portal>
	)
}

/**
 * An overlay displayed beneath the menu popup.
 * Renders a `<div>` element.
 */
export const MenuBackdrop = (props: MenuBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Backdrop
			{...restProps}
			className={toClassNames("menu__backdrop", className)}
		>
			{children}
		</Menu.Backdrop>
	)
}

/**
 * Positions the menu popup against the trigger.
 * Renders a `<div>` element.
 */
export const MenuPositioner = (props: MenuPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("menu__positioner", className)}
		>
			{children}
		</Menu.Positioner>
	)
}

/**
 * A container for the menu items.
 * Renders a `<div>` element.
 */
export const MenuPopup = (props: MenuPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Popup
			{...restProps}
			className={toClassNames("menu__popup", className)}
		>
			{children}
		</Menu.Popup>
	)
}

/**
 * Displays an element positioned against the menu anchor.
 * Renders a `<div>` element.
 */
export const MenuArrow = (props: MenuArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Menu.Arrow
			{...restProps}
			className={toClassNames("menu__arrow", className)}
		/>
	)
}

/**
 * A viewport for displaying content transitions.
 * This component is only required if one popup can be opened by multiple triggers, its content
 * changes based on the trigger, and switching between them is animated.
 * Renders a `<div>` element.
 */
export const MenuViewport = (props: MenuViewportProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Viewport
			{...restProps}
			className={toClassNames("menu__viewport", className)}
		>
			{children}
		</Menu.Viewport>
	)
}

/**
 * An individual interactive item in the menu.
 * Renders a `<div>` element.
 */
export const MenuItem = (props: MenuItemProps) => {
	const {
		variant = "primary",
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Item
			{...restProps}
			{...toDataAttrs({ variant })}
			className={toClassNames("menu__item", className)}
		>
			{children}
		</Menu.Item>
	)
}

/**
 * A link in the menu that can be used to navigate to a different page or section.
 * Renders an `<a>` element.
 */
export const MenuLinkItem = (props: MenuLinkItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.LinkItem
			{...restProps}
			className={toClassNames("menu__link-item", className)}
		>
			{children}
		</Menu.LinkItem>
	)
}

/**
 * A separator element accessible to screen readers.
 * Renders a `<div>` element.
 */
export const MenuSeparator = (props: MenuSeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Menu.Separator
			{...restProps}
			className={toClassNames("menu__separator", className)}
		/>
	)
}

/**
 * Groups all parts of a submenu.
 * Doesn't render its own HTML element.
 */
export const MenuSubmenuRoot = (props: MenuSubmenuRootProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Menu.SubmenuRoot {...restProps}>
			{children}
		</Menu.SubmenuRoot>
	)
}

/**
 * A menu item that opens a submenu.
 * Renders a `<div>` element.
 */
export const MenuSubmenuTrigger = (props: MenuSubmenuTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.SubmenuTrigger
			{...restProps}
			className={toClassNames("menu__submenu-trigger", className)}
		>
			{children}
		</Menu.SubmenuTrigger>
	)
}

/**
 * Groups related menu items with the corresponding label.
 * Renders a `<div>` element.
 */
export const MenuGroup = (props: MenuGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.Group
			{...restProps}
			className={toClassNames("menu__group", className)}
		>
			{children}
		</Menu.Group>
	)
}

/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 */
export const MenuGroupLabel = (props: MenuGroupLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.GroupLabel
			{...restProps}
			className={toClassNames("menu__group-label", className)}
		>
			{children}
		</Menu.GroupLabel>
	)
}

/**
 * Groups related radio items.
 * Renders a `<div>` element.
 */
export const MenuRadioGroup = (props: MenuRadioGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.RadioGroup
			{...restProps}
			className={toClassNames("menu__radio-group", className)}
		>
			{children}
		</Menu.RadioGroup>
	)
}

/**
 * A menu item that works like a radio button in a given group.
 * Renders a `<div>` element.
 */
export const MenuRadioItem = (props: MenuRadioItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.RadioItem
			{...restProps}
			className={toClassNames("menu__radio-item", className)}
		>
			{children}
		</Menu.RadioItem>
	)
}

/**
 * Indicates whether the radio item is selected.
 * Renders a `<span>` element.
 */
export const MenuRadioItemIndicator = (props: MenuRadioItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	const nativeIndicator = !children

	return (
		<Menu.RadioItemIndicator
			{...restProps}
			{...toDataAttrs({ nativeIndicator })}
			keepMounted={keepMounted}
			className={toClassNames("menu__radio-item-indicator", className)}
		>
			{children}
		</Menu.RadioItemIndicator>
	)
}

/**
 * A menu item that toggles a setting on or off.
 * Renders a `<div>` element.
 */
export const MenuCheckboxItem = (props: MenuCheckboxItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.CheckboxItem
			{...restProps}
			className={toClassNames("menu__checkbox-item", className)}
		>
			{children}
		</Menu.CheckboxItem>
	)
}

/**
 * Indicates whether the checkbox item is ticked.
 * Renders a `<span>` element.
 */
export const MenuCheckboxItemIndicator = (props: MenuCheckboxItemIndicatorProps) => {
	const {
		keepMounted = true,
		className,
		children,
		...restProps
	} = props

	return (
		<Menu.CheckboxItemIndicator
			{...restProps}
			keepMounted={keepMounted}
			className={toClassNames("menu__checkbox-item-indicator", className)}
		>
			{children ?? <Check/>}
		</Menu.CheckboxItemIndicator>
	)
}