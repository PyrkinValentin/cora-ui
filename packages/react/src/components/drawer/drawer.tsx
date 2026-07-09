"use client"

import type {
	DrawerRootProps,
	DrawerTriggerProps,
	DrawerSwipeAreaProps,
	DrawerPortalProps,
	DrawerBackdropProps,
	DrawerViewportProps,
	DrawerPopupProps,
	DrawerHandleProps,
	DrawerContentProps,
	DrawerTitleProps,
	DrawerDescriptionProps,
	DrawerActionsProps,
	DrawerCloseProps,
	DrawerVirtualKeyboardProviderProps,
} from "./drawer.props"

import type { DrawerViewportContextValue } from "./drawer.types"

import { useMemo } from "react"
import { useDrawerViewportContext } from "./drawer.hooks"

import { toClassNames, toDataAttrs } from "../../utils"

import { Drawer } from "@base-ui/react/drawer"
import { X } from "../../icons"
import { Render } from "../../primitives"
import { DrawerViewportContext } from "./drawer.context"

/**
 * Groups all parts of the drawer.
 * Doesn't render its own HTML element.
 */
export const DrawerRoot = <Payload = unknown>(props: DrawerRootProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Drawer.Root {...restProps}>
			{children}
		</Drawer.Root>
	)
}

/**
 * A button that opens the drawer.
 * Renders a `<button>` element.
 */
export const DrawerTrigger = <Payload = unknown>(props: DrawerTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Trigger
			{...restProps}
			className={toClassNames("drawer__trigger", className)}
		>
			{children}
		</Drawer.Trigger>
	)
}

/**
 * An invisible area that listens for swipe gestures to open the drawer.
 * Renders a `<div>` element.
 */
export const DrawerSwipeArea = (props: DrawerSwipeAreaProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.SwipeArea
			{...restProps}
			className={toClassNames("drawer__swipe-area", className)}
		>
			{children}
		</Drawer.SwipeArea>
	)
}

/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
export const DrawerPortal = (props: DrawerPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Portal
			{...restProps}
			className={toClassNames("drawer__portal", className)}
		>
			{children}
		</Drawer.Portal>
	)
}

/**
 * An overlay displayed beneath the popup.
 * Renders a `<div>` element.
 */
export const DrawerBackdrop = (props: DrawerBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Backdrop
			{...restProps}
			className={toClassNames("drawer__backdrop", className)}
		>
			{children}
		</Drawer.Backdrop>
	)
}

/**
 * A positioning container for the drawer popup that can be made scrollable.
 * Renders a `<div>` element.
 */
export const DrawerViewport = (props: DrawerViewportProps) => {
	const {
		position = "bottom",
		className,
		children,
		...restProps
	} = props

	const contextValue = useMemo<DrawerViewportContextValue>(() => ({
		position,
	}), [position])

	return (
		<DrawerViewportContext value={contextValue}>
			<Drawer.Viewport
				{...restProps}
				{...toDataAttrs({ position })}
				className={toClassNames("drawer__viewport", className)}
			>
				{children}
			</Drawer.Viewport>
		</DrawerViewportContext>
	)
}

/**
 * A container for the drawer contents.
 * Renders a `<div>` element.
 */
export const DrawerPopup = (props: DrawerPopupProps) => {
	const { position } = useDrawerViewportContext()

	const {
		swipeIgnore,
		size = "sm",
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Popup
			{...restProps}
			{...toDataAttrs({ position, size, baseUiSwipeIgnore: swipeIgnore })}
			className={toClassNames("drawer__popup", className)}
		>
			{children}
		</Drawer.Popup>
	)
}

/**
 * A visual handle element indicating that the drawer can be dragged.
 * Renders a `<span>` element.
 */
export const DrawerHandle = (props: DrawerHandleProps) => {
	const { position } = useDrawerViewportContext()

	const {
		className,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ position })}
			defaultTagName="span"
			aria-hidden="true"
			className={toClassNames("drawer__handle", className)}
		/>
	)
}

/**
 * A container for the drawer contents.
 * Renders a `<div>` element.
 */
export const DrawerContent = (props: DrawerContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Content
			{...restProps}
			className={toClassNames("drawer__content", className)}
		>
			{children}
		</Drawer.Content>
	)
}

/**
 * A heading that labels the drawer.
 * Renders an `<h2>` element.
 */
export const DrawerTitle = (props: DrawerTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Title
			{...restProps}
			className={toClassNames("drawer__title", className)}
		>
			{children}
		</Drawer.Title>
	)
}

/**
 * A paragraph with additional information about the drawer.
 * Renders a `<p>` element.
 */
export const DrawerDescription = (props: DrawerDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Description
			{...restProps}
			className={toClassNames("drawer__description", className)}
		>
			{children}
		</Drawer.Description>
	)
}

/**
 * A wrapper container for the action buttons inside the drawer.
 * Renders a `<div>` element.
 */
export const DrawerActions = (props: DrawerActionsProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			role="group"
			className={toClassNames("drawer__actions", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A button that closes the drawer.
 * Renders a `<button>` element.
 */
export const DrawerClose = (props: DrawerCloseProps) => {
	const {
		nativeClose,
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Close
			{...restProps}
			{...toDataAttrs({ nativeClose })}
			className={toClassNames("drawer__close", className)}
		>
			{children ?? (
				nativeClose
					? <X/>
					: null
			)}
		</Drawer.Close>
	)
}

/**
 * Provides keyboard-aware focus and scroll handling for bottom-sheet drawers with form fields.
 */
export const DrawerVirtualKeyboardProvider = (props: DrawerVirtualKeyboardProviderProps) => {
	const { children } = props

	return (
		<Drawer.VirtualKeyboardProvider>
			{children}
		</Drawer.VirtualKeyboardProvider>
	)
}