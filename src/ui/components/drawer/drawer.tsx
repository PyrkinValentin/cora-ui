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
} from "./drawer.props"

import type { DrawerViewportContextValue } from "./drawer.types"

import { useMemo } from "react"
import { useDrawerViewportContext } from "./drawer.hooks"

import { toClassNames, toDataAttrs } from "../../utils"

import { Drawer } from "@base-ui/react/drawer"
import { X } from "lucide-react"
import { Render } from "../../primitives"
import { DrawerViewportContext } from "./drawer.context"

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

export const DrawerPopup = (props: DrawerPopupProps) => {
	const { position } = useDrawerViewportContext()

	const {
		size = "sm",
		className,
		children,
		...restProps
	} = props

	return (
		<Drawer.Popup
			{...restProps}
			{...toDataAttrs({ position, size })}
			className={toClassNames("drawer__popup", className)}
		>
			{children}
		</Drawer.Popup>
	)
}

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