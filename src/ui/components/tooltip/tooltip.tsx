"use client"

import type {
	TooltipProviderProps,
	TooltipRootProps,
	TooltipTriggerProps,
	TooltipPortalProps,
	TooltipPositionerProps,
	TooltipPopupProps,
	TooltipArrowProps,
	TooltipViewportProps,
} from "./tooltip.props"

import { toClassNames } from "../../utils"

import { Tooltip } from "@base-ui/react/tooltip"

export const TooltipProvider = (props: TooltipProviderProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Tooltip.Provider {...restProps}>
			{children}
		</Tooltip.Provider>
	)
}

export const TooltipRoot = <Payload = unknown>(props: TooltipRootProps<Payload>) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Tooltip.Root {...restProps}>
			{children}
		</Tooltip.Root>
	)
}

export const TooltipTrigger = <Payload = unknown>(props: TooltipTriggerProps<Payload>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Trigger
			{...restProps}
			className={toClassNames("tooltip__trigger", className)}
		>
			{children}
		</Tooltip.Trigger>
	)
}

export const TooltipPortal = (props: TooltipPortalProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Tooltip.Portal {...restProps}>
			{children}
		</Tooltip.Portal>
	)
}

export const TooltipPositioner = (props: TooltipPositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("tooltip__positioner", className)}
		>
			{children}
		</Tooltip.Positioner>
	)
}

export const TooltipPopup = (props: TooltipPopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Popup
			{...restProps}
			className={toClassNames("tooltip__popup", className)}
		>
			{children}
		</Tooltip.Popup>
	)
}

export const TooltipArrow = (props: TooltipArrowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Arrow
			{...restProps}
			className={toClassNames("tooltip__arrow", className)}
		>
			{children}
		</Tooltip.Arrow>
	)
}

export const TooltipViewport = (props: TooltipViewportProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Viewport
			{...restProps}
			className={toClassNames("tooltip__viewport", className)}
		>
			{children}
		</Tooltip.Viewport>
	)
}

TooltipProvider.displayName = "Tooltip.Provider"
TooltipRoot.displayName = "Tooltip.Root"
TooltipTrigger.displayName = "Tooltip.Trigger"
TooltipPortal.displayName = "Tooltip.Portal"
TooltipPositioner.displayName = "Tooltip.Positioner"
TooltipPopup.displayName = "Tooltip.Popup"
TooltipArrow.displayName = "Tooltip.Arrow"
TooltipViewport.displayName = "Tooltip.Viewport"