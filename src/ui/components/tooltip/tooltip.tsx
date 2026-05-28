"use client"

import type {
	TooltipProviderProps,
	TooltipRootProps,
	TooltipTriggerProps,
	TooltipPortalProps,
	TooltipPositionerProps,
	TooltipPopupProps,
	TooltipArrowProps,
} from "./tooltip.props"

import { applyCn } from "../../utils"

import { Tooltip } from "@base-ui/react/tooltip"

export const TooltipProvider = (props: TooltipProviderProps) => {
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
		children,
		...restProps
	} = props

	return (
		<Tooltip.Trigger
			{...restProps}
			data-slot="tooltip-trigger"
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
		<Tooltip.Portal
			{...restProps}
			data-slot="tooltip-portal"
		>
			{children}
		</Tooltip.Portal>
	)
}

export const TooltipPositioner = (props: TooltipPositionerProps) => {
	const {
		sideOffset = 8,
		children,
		...restProps
	} = props

	return (
		<Tooltip.Positioner
			{...restProps}
			data-slot="tooltip-positioner"
			sideOffset={sideOffset}
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
			data-slot="tooltip-popup"
			className={applyCn("tooltip__popup", className)}
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
			data-slot="tooltip-arrow"
			className={applyCn("tooltip__arrow", className)}
		>
			{children}
		</Tooltip.Arrow>
	)
}

TooltipProvider.displayName = "Tooltip.Provider"
TooltipRoot.displayName = "Tooltip.Root"
TooltipTrigger.displayName = "Tooltip.Trigger"
TooltipPortal.displayName = "Tooltip.Portal"
TooltipPositioner.displayName = "Tooltip.Positioner"
TooltipPopup.displayName = "Tooltip.Popup"
TooltipArrow.displayName = "Tooltip.Arrow"