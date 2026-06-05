"use client"

import type {
	PopoverRootProps,
	PopoverTriggerProps,
	PopoverPortalProps,
	PopoverBackdropProps,
	PopoverPositionerProps,
	PopoverPopupProps,
	PopoverArrowProps,
	PopoverViewportProps,
	PopoverTitleProps,
	PopoverDescriptionProps,
	PopoverCloseProps,
} from "./popover.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Popover } from "@base-ui/react/popover"
import { X } from "lucide-react"

export const PopoverRoot = <Payload = unknown>(props: PopoverRootProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Popover.Root {...restProps}>
			{children}
		</Popover.Root>
	)
}

export const PopoverTrigger = <Payload = unknown>(props: PopoverTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Trigger
			{...restProps}
			className={toClassNames("popover__trigger", className)}
		>
			{children}
		</Popover.Trigger>
	)
}

export const PopoverPortal = (props: PopoverPortalProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Popover.Portal {...restProps}>
			{children}
		</Popover.Portal>
	)
}

export const PopoverBackdrop = (props: PopoverBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Backdrop
			{...restProps}
			className={toClassNames("popover__backdrop", className)}
		>
			{children}
		</Popover.Backdrop>
	)
}

export const PopoverPositioner = (props: PopoverPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("popover__positioner", className)}
		>
			{children}
		</Popover.Positioner>
	)
}

export const PopoverPopup = (props: PopoverPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Popup
			{...restProps}
			className={toClassNames("popover__popup", className)}
		>
			{children}
		</Popover.Popup>
	)
}

export const PopoverArrow = (props: PopoverArrowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Arrow
			{...restProps}
			className={toClassNames("popover__arrow", className)}
		>
			{children}
		</Popover.Arrow>
	)
}

export const PopoverViewport = (props: PopoverViewportProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Viewport
			{...restProps}
			className={toClassNames("popover__viewport", className)}
		>
			{children}
		</Popover.Viewport>
	)
}

export const PopoverTitle = (props: PopoverTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Title
			{...restProps}
			className={toClassNames("popover__title", className)}
		>
			{children}
		</Popover.Title>
	)
}

export const PopoverDescription = (props: PopoverDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Description
			{...restProps}
			className={toClassNames("popover__description", className)}
		>
			{children}
		</Popover.Description>
	)
}

export const PopoverClose = (props: PopoverCloseProps) => {
	const {
		nativeClose,
		className,
		children,
		...restProps
	} = props

	return (
		<Popover.Close
			{...restProps}
			{...toDataAttrs({ nativeClose })}
			className={toClassNames("popover__close", className)}
		>
			{children ?? (
				nativeClose
					? <X/>
					: null
			)}
		</Popover.Close>
	)
}

PopoverRoot.displayName = "Popover.Root"
PopoverTrigger.displayName = "Popover.Trigger"
PopoverPortal.displayName = "Popover.Portal"
PopoverBackdrop.displayName = "Popover.Backdrop"
PopoverPositioner.displayName = "Popover.Positioner"
PopoverPopup.displayName = "Popover.Popup"
PopoverArrow.displayName = "Popover.Arrow"
PopoverViewport.displayName = "Popover.Viewport"
PopoverTitle.displayName = "Popover.Title"
PopoverDescription.displayName = "Popover.Description"
PopoverClose.displayName = "Popover.Close"