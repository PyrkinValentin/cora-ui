"use client"

import type {
	ToastProviderProps,
	ToastPortalProps,
	ToastViewportProps,
	ToastPositionerProps,
	ToastRootProps,
	ToastArrowProps,
	ToastContentProps,
	ToastIndicatorProps,
	ToastSummaryProps,
	ToastTitleProps,
	ToastDescriptionProps,
	ToastActionProps,
	ToastCloseProps,
} from "./toast.props"

import type { ToastData, ToastContextValue, ToastRootProviderProps, ToastRootContextValue } from "./toast.types"

import { useMemo } from "react"
import { useToastContext, useToastRootContext, useToastSwipeDirection } from "./toast.hooks"

import { applyCn, toDataAttrs } from "../../utils"
import { toastDefaultManager } from "./toast.utils"

import { TOAST_INDICATORS } from "./toast.vars"

import { Toast } from "@base-ui/react/toast"
import { Render } from "../render"
import { Spinner } from "../spinner"
import { Button } from "../button"
import { ToastContext, ToastRootContext } from "./toast.context"

export const ToastProvider = (props: ToastProviderProps) => {
	const {
		side = "bottom",
		align = "end",
		toastManager = toastDefaultManager,
		children,
		...restProps
	} = props

	const contextValue = useMemo<ToastContextValue>(() => ({
		side,
		align,
	}), [side, align])

	return (
		<Toast.Provider
			{...restProps}
			toastManager={toastManager}
		>
			<ToastContext.Provider value={contextValue}>
				{children}
			</ToastContext.Provider>
		</Toast.Provider>
	)
}

export const ToastPortal = (props: ToastPortalProps) => {
	const { side, align } = useToastContext()

	const {
		children,
		...restProps
	} = props

	return (
		<Toast.Portal
			{...restProps}
			{...toDataAttrs({ side, align })}
			data-slot="toast-portal"
		>
			{children}
		</Toast.Portal>
	)
}

export const ToastViewport = (props: ToastViewportProps) => {
	const { side, align } = useToastContext()

	const {
		children,
		...restProps
	} = props

	return (
		<Toast.Viewport
			{...restProps}
			{...toDataAttrs({ side, align })}
			data-slot="toast-viewport"
			className="toast__viewport"
		>
			{children}
		</Toast.Viewport>
	)
}

export const ToastPositioner = (props: ToastPositionerProps) => {
	const { side, align } = useToastContext()

	const {
		sideOffset = 8,
		children,
		...restProps
	} = props

	return (
		<Toast.Positioner
			{...restProps}
			{...toDataAttrs({ side, align })}
			data-slot="toast-positioner"
			className="toast__positioner"
			sideOffset={sideOffset}
		>
			{children}
		</Toast.Positioner>
	)
}

const ToastRootProvider = (props: ToastRootProviderProps) => {
	const {
		type,
		duplicate,
		anchor,
		status,
		indicator,
		children,
	} = props

	const contextValue = useMemo<ToastRootContextValue>(() => ({
		type,
		duplicate,
		anchor,
		status,
		indicator,
	}), [type, duplicate, anchor, status, indicator])

	return (
		<ToastRootContext.Provider value={contextValue}>
			{children}
		</ToastRootContext.Provider>
	)
}

export const ToastRoot = <Data extends ToastData>(props: ToastRootProps<Data>) => {
	const { side, align } = useToastContext()

	const {
		className,
		toast,
		children,
		...restProps
	} = props

	const duplicate = !!toast.updateKey
	const anchor = !!toast.positionerProps?.anchor

	const status = toast.type === "success" || toast.type === "error"
		? toast.type
		: toast.status ?? "neutral"

	const swipeDirection = useToastSwipeDirection({ side, align })

	return (
		<ToastRootProvider
			type={toast.type}
			duplicate={duplicate}
			anchor={anchor}
			status={status}
			indicator={toast.indicator}
		>
			<Toast.Root
				{...restProps}
				{...toDataAttrs({ side, align, duplicate, status, anchor })}
				data-slot="toast"
				className={applyCn("toast", className)}
				toast={toast}
				swipeDirection={swipeDirection}
			>
				{children}
			</Toast.Root>
		</ToastRootProvider>
	)
}

export const ToastArrow = (props: ToastArrowProps) => {
	const { duplicate, status, anchor } = useToastRootContext()

	const {
		className,
		children,
		...restProps
	} = props

	if (!anchor) return null

	return (
		<Toast.Arrow
			{...restProps}
			{...toDataAttrs({ duplicate, status, anchor })}
			data-slot="toast-arrow"
			className={applyCn("toast__arrow", className)}
		>
			{children}
		</Toast.Arrow>
	)
}

export const ToastContent = (props: ToastContentProps) => {
	const { side, align } = useToastContext()
	const { duplicate, anchor, status } = useToastRootContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Content
			{...restProps}
			{...toDataAttrs({ side, align, duplicate, anchor, status })}
			data-slot="toast-content"
			className={applyCn("toast__content", className)}
		>
			{children}
		</Toast.Content>
	)
}

export const ToastIndicator = (props: ToastIndicatorProps) => {
	const { side, align } = useToastContext()
	const { type, duplicate, anchor, status, indicator } = useToastRootContext()

	const {
		className,
		children = indicator,
		...restProps
	} = props

	const Indicator = TOAST_INDICATORS[status]

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ side, align, duplicate, anchor, status })}
			defaultTagName="span"
			aria-hidden={true}
			data-slot="toast-indicator"
			className={applyCn("toast__indicator", className)}
		>
			{type === "loading"
				? <Spinner size="lg"/>
				: (children ?? <Indicator/>)
			}
		</Render>
	)
}

export const ToastSummary = (props: ToastSummaryProps) => {
	const { side, align } = useToastContext()
	const { duplicate, anchor, status } = useToastRootContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ side, align, duplicate, anchor, status })}
			defaultTagName="div"
			data-slot="toast-summary"
			className={applyCn("toast__summary", className)}
		>
			{children}
		</Render>
	)
}

export const ToastTitle = (props: ToastTitleProps) => {
	const { side, align } = useToastContext()
	const { duplicate, anchor, status } = useToastRootContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Title
			{...restProps}
			{...toDataAttrs({ side, align, duplicate, anchor, status })}
			data-slot="toast-title"
			className={applyCn("toast__title", className)}
		>
			{children}
		</Toast.Title>
	)
}

export const ToastDescription = (props: ToastDescriptionProps) => {
	const { side, align } = useToastContext()
	const { duplicate, anchor, status } = useToastRootContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Description
			{...restProps}
			{...toDataAttrs({ side, align, duplicate, anchor, status })}
			data-slot="toast-description"
			className={applyCn("toast__description", className)}
		>
			{children}
		</Toast.Description>
	)
}

export const ToastAction = (props: ToastActionProps) => {
	const { side, align } = useToastContext()
	const { duplicate, anchor, status } = useToastRootContext()

	const {
		render,
		children,
		...restProps
	} = props

	return (
		<Toast.Action
			{...restProps}
			{...toDataAttrs({ side, align, duplicate, anchor, status })}
			render={render ?? <Button size="sm" color={status}/>}
			data-slot="toast-action"
		>
			{children}
		</Toast.Action>
	)
}

export const ToastClose = (props: ToastCloseProps) => {
	const { side, align } = useToastContext()
	const { duplicate, anchor, status } = useToastRootContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Close
			{...restProps}
			{...toDataAttrs({ side, align, duplicate, anchor, status })}
			data-slot="toast-close"
			className={applyCn("toast__close", className)}
		>
			{children}
		</Toast.Close>
	)
}

ToastProvider.displayName = "Toast.Provider"
ToastPortal.displayName = "Toast.Portal"
ToastViewport.displayName = "Toast.Viewport"
ToastPositioner.displayName = "Toast.Positioner"
ToastRootProvider.displayName = "Toast.RootProvider"
ToastRoot.displayName = "Toast.Root"
ToastArrow.displayName = "Toast.Arrow"
ToastContent.displayName = "Toast.Content"
ToastIndicator.displayName = "Toast.Indicator"
ToastSummary.displayName = "Toast.Summary"
ToastTitle.displayName = "Toast.Title"
ToastDescription.displayName = "Toast.Description"
ToastAction.displayName = "Toast.Action"
ToastClose.displayName = "Toast.Close"