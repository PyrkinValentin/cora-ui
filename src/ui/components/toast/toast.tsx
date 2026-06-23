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
import { X } from "lucide-react"
import { Render } from "../../primitives"
import { Spinner } from "../spinner"
import { ToastRootContext } from "./toast.context"

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