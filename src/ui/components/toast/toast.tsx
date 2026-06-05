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
	ToastGroupProps,
	ToastTitleProps,
	ToastDescriptionProps,
	ToastActionProps,
	ToastCloseProps,
} from "./toast.props"

import type { ToastData, ToastContextValue, ToastRootContextValue } from "./toast.types"

import { useMemo } from "react"
import { useToastContext, useToastRootContext, useToastSwipeDirection } from "./toast.hooks"

import { toClassNames, toDataAttrs } from "../../utils"

import { STATUS_INDICATORS } from "../../constants"

import { Toast } from "@base-ui/react/toast"
import { X } from "lucide-react"
import { Render } from "../render"
import { Spinner } from "../spinner"
import { ToastContext, ToastRootContext } from "./toast.context"

export const ToastProvider = (props: ToastProviderProps) => {
	const {
		side = "bottom",
		align = "end",
		children,
		...restProps
	} = props

	const contextValue = useMemo<ToastContextValue>(() => ({
		side,
		align,
	}), [side, align])

	return (
		<ToastContext value={contextValue}>
			<Toast.Provider {...restProps}>
				{children}
			</Toast.Provider>
		</ToastContext>
	)
}

export const ToastPortal = (props: ToastPortalProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Toast.Portal {...restProps}>
			{children}
		</Toast.Portal>
	)
}

export const ToastViewport = (props: ToastViewportProps) => {
	const { side, align } = useToastContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toast.Viewport
			{...restProps}
			{...toDataAttrs({ side, align })}
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
	const { side, align } = useToastContext()

	const {
		swipeDirection,
		toast,
		className,
		children,
		...restProps
	} = props

	const swipeDirectionProp = useToastSwipeDirection({ side, align, swipeDirection })

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
				{...toDataAttrs({ side, align })}
				swipeDirection={swipeDirectionProp}
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
		children,
		...restProps
	} = props

	return (
		<Toast.Arrow
			{...restProps}
			className={toClassNames("toast__arrow", className)}
		>
			{children}
		</Toast.Arrow>
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
		children = indicator,
		...restProps
	} = props

	const Indicator = STATUS_INDICATORS[status]

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ status })}
			defaultTagName="span"
			className={toClassNames("toast__indicator", className)}
		>
			{type === "loading"
				? <Spinner size="lg"/>
				: (children ?? <Indicator/>)
			}
		</Render>
	)
}

export const ToastGroup = (props: ToastGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("toast__group", className)}
		>
			{children}
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

ToastProvider.displayName = "Toast.Provider"
ToastPortal.displayName = "Toast.Portal"
ToastViewport.displayName = "Toast.Viewport"
ToastPositioner.displayName = "Toast.Positioner"
ToastRoot.displayName = "Toast.Root"
ToastArrow.displayName = "Toast.Arrow"
ToastContent.displayName = "Toast.Content"
ToastIndicator.displayName = "Toast.Indicator"
ToastGroup.displayName = "Toast.Group"
ToastTitle.displayName = "Toast.Title"
ToastDescription.displayName = "Toast.Description"
ToastAction.displayName = "Toast.Action"
ToastClose.displayName = "Toast.Close"