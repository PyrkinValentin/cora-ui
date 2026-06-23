"use client"

import type {
	AlertDialogRootProps,
	AlertDialogTriggerProps,
	AlertDialogPortalProps,
	AlertDialogBackdropProps,
	AlertDialogViewportProps,
	AlertDialogPopupProps,
	AlertDialogIndicatorProps,
	AlertDialogTitleProps,
	AlertDialogDescriptionProps,
	AlertDialogActionsProps,
	AlertDialogCloseProps,
} from "./alert-dialog.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { STATUS_INDICATORS } from "../../constants"

import { AlertDialog } from "@base-ui/react/alert-dialog"
import { X } from "lucide-react"
import { Render } from "../../primitives"

export const AlertDialogRoot = <Payload = unknown>(props: AlertDialogRootProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Root {...restProps}>
			{children}
		</AlertDialog.Root>
	)
}

export const AlertDialogTrigger = <Payload = unknown>(props: AlertDialogTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Trigger
			{...restProps}
			className={toClassNames("alert-dialog__trigger", className)}
		>
			{children}
		</AlertDialog.Trigger>
	)
}

export const AlertDialogPortal = (props: AlertDialogPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Portal
			{...restProps}
			className={toClassNames("alert-dialog__portal", className)}
		>
			{children}
		</AlertDialog.Portal>
	)
}

export const AlertDialogBackdrop = (props: AlertDialogBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Backdrop
			{...restProps}
			className={toClassNames("alert-dialog__backdrop", className)}
		>
			{children}
		</AlertDialog.Backdrop>
	)
}

export const AlertDialogViewport = (props: AlertDialogViewportProps) => {
	const {
		position = "center",
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Viewport
			{...restProps}
			{...toDataAttrs({ position })}
			className={toClassNames("alert-dialog__viewport", className)}
		>
			{children}
		</AlertDialog.Viewport>
	)
}

export const AlertDialogPopup = (props: AlertDialogPopupProps) => {
	const {
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Popup
			{...restProps}
			{...toDataAttrs({ size })}
			className={toClassNames("alert-dialog__popup", className)}
		>
			{children}
		</AlertDialog.Popup>
	)
}

export const AlertDialogIndicator = (props: AlertDialogIndicatorProps) => {
	const {
		status = "neutral",
		className,
		children,
		...restProps
	} = props

	const Indicator = STATUS_INDICATORS[status]

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ status })}
			defaultTagName="span"
			className={toClassNames("alert-dialog__indicator", className)}
		>
			{children ?? <Indicator/>}
		</Render>
	)
}

export const AlertDialogTitle = (props: AlertDialogTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Title
			{...restProps}
			className={toClassNames("alert-dialog__title", className)}
		>
			{children}
		</AlertDialog.Title>
	)
}

export const AlertDialogDescription = (props: AlertDialogDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Description
			{...restProps}
			className={toClassNames("alert-dialog__description", className)}
		>
			{children}
		</AlertDialog.Description>
	)
}

export const AlertDialogActions = (props: AlertDialogActionsProps) => {
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
			className={toClassNames("alert-dialog__actions", className)}
		>
			{children}
		</Render>
	)
}

export const AlertDialogClose = (props: AlertDialogCloseProps) => {
	const {
		nativeClose,
		className,
		children,
		...restProps
	} = props

	return (
		<AlertDialog.Close
			{...restProps}
			{...toDataAttrs({ nativeClose })}
			className={toClassNames("alert-dialog__close", className)}
		>
			{children ?? (
				nativeClose
					? <X/>
					: null
			)}
		</AlertDialog.Close>
	)
}