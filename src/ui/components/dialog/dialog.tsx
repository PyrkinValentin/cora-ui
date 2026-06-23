"use client"

import type {
	DialogRootProps,
	DialogTriggerProps,
	DialogPortalProps,
	DialogBackdropProps,
	DialogViewportProps,
	DialogPopupProps,
	DialogTitleProps,
	DialogDescriptionProps,
	DialogActionsProps,
	DialogCloseProps,
} from "./dialog.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Dialog } from "@base-ui/react/dialog"
import { X } from "lucide-react"
import { Render } from "../../primitives"

export const DialogRoot = <Payload = unknown>(props: DialogRootProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Dialog.Root {...restProps}>
			{children}
		</Dialog.Root>
	)
}

export const DialogTrigger = <Payload = unknown>(props: DialogTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Trigger
			{...restProps}
			className={toClassNames("dialog__trigger", className)}
		>
			{children}
		</Dialog.Trigger>
	)
}

export const DialogPortal = (props: DialogPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Portal
			{...restProps}
			className={toClassNames("dialog__portal", className)}
		>
			{children}
		</Dialog.Portal>
	)
}

export const DialogBackdrop = (props: DialogBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Backdrop
			{...restProps}
			className={toClassNames("dialog__backdrop", className)}
		>
			{children}
		</Dialog.Backdrop>
	)
}

export const DialogViewport = (props: DialogViewportProps) => {
	const {
		position = "center",
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Viewport
			{...restProps}
			{...toDataAttrs({ position })}
			className={toClassNames("dialog__viewport", className)}
		>
			{children}
		</Dialog.Viewport>
	)
}

export const DialogPopup = (props: DialogPopupProps) => {
	const {
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Popup
			{...restProps}
			{...toDataAttrs({ size })}
			className={toClassNames("dialog__popup", className)}
		>
			{children}
		</Dialog.Popup>
	)
}

export const DialogTitle = (props: DialogTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Title
			{...restProps}
			className={toClassNames("dialog__title", className)}
		>
			{children}
		</Dialog.Title>
	)
}

export const DialogDescription = (props: DialogDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Description
			{...restProps}
			className={toClassNames("dialog__description", className)}
		>
			{children}
		</Dialog.Description>
	)
}

export const DialogActions = (props: DialogActionsProps) => {
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
			className={toClassNames("dialog__actions", className)}
		>
			{children}
		</Render>
	)
}

export const DialogClose = (props: DialogCloseProps) => {
	const {
		nativeClose,
		className,
		children,
		...restProps
	} = props

	return (
		<Dialog.Close
			{...restProps}
			{...toDataAttrs({ nativeClose })}
			className={toClassNames("dialog__close", className)}
		>
			{children ?? (
				nativeClose
					? <X/>
					: null
			)}
		</Dialog.Close>
	)
}