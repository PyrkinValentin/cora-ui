"use client"

import type {
	DialogRootProps,
	DialogTriggerProps,
	DialogPortalProps,
	DialogBackdropProps,
	DialogViewportProps,
	DialogPopupProps,
	DialogIconProps,
	DialogTitleProps,
	DialogDescriptionProps,
	DialogActionsProps,
	DialogCloseProps,
} from "./dialog.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Dialog } from "@base-ui/react/dialog"
import { X } from "../../icons"
import { Render } from "../../primitives"

/**
 * Groups all parts of the dialog.
 * Doesn't render its own HTML element.
 */
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

/**
 * A button that opens the dialog.
 * Renders a `<button>` element.
 */
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

/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
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

/**
 * An overlay displayed beneath the popup.
 * Renders a `<div>` element.
 */
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

/**
 * A positioning container for the dialog popup that can be made scrollable.
 * Renders a `<div>` element.
 */
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

/**
 * A container for the dialog contents.
 * Renders a `<div>` element.
 */
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

/**
 * A visual component for icons inside dialogs.
 * Renders a `<span>` element.
 */
export const DialogIcon = (props: DialogIconProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			className={toClassNames("dialog__icon", className)}
		>
			{children}
		</Render>
	)
}

/**
 * A heading that labels the dialog.
 * Renders an `<h2>` element.
 */
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

/**
 * A paragraph with additional information about the dialog.
 * Renders a `<p>` element.
 */
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

/**
 * A wrapper container for the action buttons inside the dialog.
 * Renders a `<div>` element.
 */
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

/**
 * A button that closes the dialog.
 * Renders a `<button>` element.
 */
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