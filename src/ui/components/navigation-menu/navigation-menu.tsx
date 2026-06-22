"use client"

import type {
	NavigationMenuRootProps,
	NavigationMenuListProps,
	NavigationMenuItemProps,
	NavigationMenuTriggerProps,
	NavigationMenuIconProps,
	NavigationMenuContentProps,
	NavigationMenuLinkProps,
	NavigationMenuPortalProps,
	NavigationMenuBackdropProps,
	NavigationMenuPositionerProps,
	NavigationMenuPopupProps,
	NavigationMenuArrowProps,
	NavigationMenuViewportProps,
} from "./navigation-menu.props"

import { toClassNames } from "../../utils"

import { NavigationMenu } from "@base-ui/react/navigation-menu"
import { ChevronDown } from "lucide-react"

export const NavigationMenuRoot = <Value = unknown>(props: NavigationMenuRootProps<Value>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Root
			{...restProps}
			className={toClassNames("navigation-menu", className)}
		>
			{children}
		</NavigationMenu.Root>
	)
}

export const NavigationMenuList = (props: NavigationMenuListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.List
			{...restProps}
			className={toClassNames("navigation-menu__list", className)}
		>
			{children}
		</NavigationMenu.List>
	)
}

export const NavigationMenuItem = (props: NavigationMenuItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Item
			{...restProps}
			className={toClassNames("navigation-menu__item", className)}
		>
			{children}
		</NavigationMenu.Item>
	)
}

export const NavigationMenuTrigger = (props: NavigationMenuTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Trigger
			{...restProps}
			className={toClassNames("navigation-menu__trigger", className)}
		>
			{children}
		</NavigationMenu.Trigger>
	)
}

export const NavigationMenuIcon = (props: NavigationMenuIconProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Icon
			{...restProps}
			className={toClassNames("navigation-menu__icon", className)}
		>
			{children ?? <ChevronDown/>}
		</NavigationMenu.Icon>
	)
}

export const NavigationMenuContent = (props: NavigationMenuContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Content
			{...restProps}
			className={toClassNames("navigation-menu__content", className)}
		>
			{children ?? <ChevronDown/>}
		</NavigationMenu.Content>
	)
}

export const NavigationMenuLink = (props: NavigationMenuLinkProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Link
			{...restProps}
			className={toClassNames("navigation-menu__link", className)}
		>
			{children}
		</NavigationMenu.Link>
	)
}

export const NavigationMenuPortal = (props: NavigationMenuPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Portal
			{...restProps}
			className={toClassNames("navigation-menu__portal", className)}
		>
			{children}
		</NavigationMenu.Portal>
	)
}

export const NavigationMenuBackdrop = (props: NavigationMenuBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Backdrop
			{...restProps}
			className={toClassNames("navigation-menu__backdrop", className)}
		>
			{children}
		</NavigationMenu.Backdrop>
	)
}

export const NavigationMenuPositioner = (props: NavigationMenuPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("navigation-menu__positioner", className)}
		>
			{children}
		</NavigationMenu.Positioner>
	)
}

export const NavigationMenuPopup = (props: NavigationMenuPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Popup
			{...restProps}
			className={toClassNames("navigation-menu__popup", className)}
		>
			{children}
		</NavigationMenu.Popup>
	)
}

export const NavigationMenuArrow = (props: NavigationMenuArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<NavigationMenu.Arrow
			{...restProps}
			className={toClassNames("navigation-menu__arrow", className)}
		/>
	)
}

export const NavigationMenuViewport = (props: NavigationMenuViewportProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<NavigationMenu.Viewport
			{...restProps}
			className={toClassNames("navigation-menu__viewport", className)}
		>
			{children}
		</NavigationMenu.Viewport>
	)
}
