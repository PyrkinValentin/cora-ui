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
	ToastTitleProps,
	ToastDescriptionProps,
	ToastActionProps,
	ToastCloseProps,
} from "./toast.props"

import type { ToastData, ToastRootContextValue } from "./toast.types"

import { useMemo } from "react"
import { useToastRootContext } from "./toast.hooks"

import { toClassNames, toDataAttrs } from "../../utils"

import { STATUS_INDICATORS } from "../../constants"

import { Toast } from "@base-ui/react/toast"
import { X } from "../../icons"
import { Render } from "../../primitives"
import { Spinner } from "../spinner"
import { ToastRootContext } from "./toast.context"

/**
 * Provides a context for creating and managing toasts.
 */
export const ToastProvider = (props: ToastProviderProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Toast.Provider {...restProps}>
			{children}
		</Toast.Provider>
	)
}

/**
 * A portal element that moves the viewport to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
export const ToastPortal = (props: ToastPortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Portal
			{...restProps}
			className={toClassNames("toast__portal", className)}
		>
			{children}
		</Toast.Portal>
	)
}

/**
 * A container viewport for toasts.
 * Renders a `<div>` element.
 */
export const ToastViewport = (props: ToastViewportProps) => {
	const {
		position = "bottom-right",
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Viewport
			{...restProps}
			{...toDataAttrs({ position })}
			className={toClassNames("toast__viewport", className)}
		>
			{children}
		</Toast.Viewport>
	)
}

/**
 * Positions the toast against the anchor.
 * Renders a `<div>` element.
 */
export const ToastPositioner = (props: ToastPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("toast__positioner", className)}
		>
			{children}
		</Toast.Positioner>
	)
}

/**
 * Groups all parts of an individual toast.
 * Renders a `<div>` element.
 */
export const ToastRoot = <Data extends ToastData>(props: ToastRootProps<Data>) => {
	const {
		toast,
		className,
		children,
		...restProps
	} = props

	const status = toast.type === "success" || toast.type === "error"
		? toast.type
		: toast.status ?? "neutral"
	
	const updateAnimation = toast.updateKey
		? toast.updateKey % 2 === 0
			? "animate-jelly"
			: "animate-jelly-odd"
		: undefined

	const contextValue = useMemo<ToastRootContextValue>(() => ({
		type: toast.type,
		status,
		indicator: toast.indicator,
	}), [toast.type, status, toast.indicator])

	return (
		<ToastRootContext value={contextValue}>
			<Toast.Root
				{...restProps}
				toast={toast}
				className={toClassNames(["toast", updateAnimation], className)}
			>
				{children}
			</Toast.Root>
		</ToastRootContext>
	)
}

/**
 * Displays an element positioned against the toast anchor.
 * Renders a `<div>` element.
 */
export const ToastArrow = (props: ToastArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Toast.Arrow
			{...restProps}
			className={toClassNames("toast__arrow", className)}
		/>
	)
}

/**
 * A container for the contents of a toast.
 * Renders a `<div>` element.
 */
export const ToastContent = (props: ToastContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Content
			{...restProps}
			className={toClassNames("toast__content", className)}
		>
			{children}
		</Toast.Content>
	)
}

/**
 * A visual icon or loading spinner representing the type or status of the toast.
 * Renders a `<span>` element.
 */
export const ToastIndicator = (props: ToastIndicatorProps) => {
	const { type, status, indicator } = useToastRootContext()

	const {
		className,
		children,
		...restProps
	} = props

	const Indicator = STATUS_INDICATORS[status]

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ type, status })}
			defaultTagName="span"
			className={toClassNames("toast__indicator", className)}
		>
			{type === "loading"
				? <Spinner size="lg"/>
				: (children ?? indicator ?? <Indicator/>)
			}
		</Render>
	)
}

/**
 * A title that labels the toast.
 * Renders an `<h2>` element.
 */
export const ToastTitle = (props: ToastTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Title
			{...restProps}
			className={toClassNames("toast__title", className)}
		>
			{children}
		</Toast.Title>
	)
}

/**
 * A description that describes the toast.
 * Can be used as the default message for the toast when no title is provided.
 * Renders a `<p>` element.
 */
export const ToastDescription = (props: ToastDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Description
			{...restProps}
			className={toClassNames("toast__description", className)}
		>
			{children}
		</Toast.Description>
	)
}

/**
 * Performs an action when clicked.
 * Renders a `<button>` element.
 */
export const ToastAction = (props: ToastActionProps) => {
	const {
		nativeAction = true,
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Action
			{...restProps}
			{...toDataAttrs({ nativeAction })}
			className={toClassNames("toast__action", className)}
		>
			{children}
		</Toast.Action>
	)
}

/**
 * Closes the toast when clicked.
 * Renders a `<button>` element.
 */
export const ToastClose = (props: ToastCloseProps) => {
	const {
		nativeClose = true,
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Close
			{...restProps}
			{...toDataAttrs({ nativeClose })}
			className={toClassNames("toast__close", className)}
		>
			{children ?? (
				nativeClose
					? <X/>
					: null
			)}
		</Toast.Close>
	)
}