"use client"

import type {
	PopoverRootProps,
	PopoverTriggerProps,
	PopoverPortalProps,
	PopoverBackdropProps,
	PopoverPositionerProps,
	PopoverPopupProps,
	PopoverArrowProps,
	PopoverTitleProps,
	PopoverDescriptionProps,
	PopoverCloseProps,
} from "./popover.props"

import { applyCn } from "../../utils"

import { Popover } from "@base-ui/react/popover"

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
		children,
		...restProps
	} = props

	return (
		<Popover.Trigger
			{...restProps}
			data-slot="popover-trigger"
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
		<Popover.Portal
			{...restProps}
			data-slot="popover-portal"
		>
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
			data-slot="popover-backdrop"
			className={applyCn("popover__backdrop", className)}
		>
			{children}
		</Popover.Backdrop>
	)
}

export const PopoverPositioner = (props: PopoverPositionerProps) => {
	const {
		sideOffset = 8,
		children,
		...restProps
	} = props

	return (
		<Popover.Positioner
			{...restProps}
			data-slot="popover-positioner"
			sideOffset={sideOffset}
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
			data-slot="popover-popup"
			className={applyCn("popover__popup", className)}
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
			data-slot="popover-arrow"
			className={applyCn("popover__arrow", className)}
		>
			{children}
		</Popover.Arrow>
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
			data-slot="popover-title"
			className={applyCn("popover__title", className)}
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
			data-slot="popover-description"
			className={applyCn("popover__description", className)}
		>
			{children}
		</Popover.Description>
	)
}

export const PopoverClose = (props: PopoverCloseProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Popover.Close
			{...restProps}
			data-slot="popover-close"
		>
			{children}
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
PopoverTitle.displayName = "Popover.Title"
PopoverDescription.displayName = "Popover.Description"
PopoverClose.displayName = "Popover.Close"