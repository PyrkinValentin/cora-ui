"use client"

import type { BadgeRootProps, BadgeIndicatorProps } from "./badge.props"
import type { BadgeContextValue, BadgeProviderProps } from "./badge.types"

import { useMemo } from "react"
import { useBadgeContext } from "./badge.hooks"

import { applyCn, toDataAttrs } from "../../utils"

import { Render } from "../render"
import { BadgeContext } from "./badge.context"

const BadgeProvider = (props: BadgeProviderProps) => {
	const {
		invisible,
		side,
		align,
		size,
		status,
		children,
	} = props

	const contextValue = useMemo<BadgeContextValue>(() => ({
		invisible,
		side,
		align,
		size,
		status,
	}), [invisible, side, align, size, status])

	return (
		<BadgeContext value={contextValue}>
			{children}
		</BadgeContext>
	)
}

export const BadgeRoot = (props: BadgeRootProps) => {
	const {
		invisible = false,
		side = "top",
		align = "end",
		size = "md",
		status = "neutral",
		className,
		children,
		...restProps
	} = props

	return (
		<BadgeProvider
			invisible={invisible}
			side={side}
			align={align}
			size={size}
			status={status}
		>
			<Render
				{...restProps}
				{...toDataAttrs({ invisible, side, align, size, status })}
				defaultTagName="span"
				state={{ invisible }}
				data-slot="badge"
				className={applyCn("badge", className)}
			>
				{children}
			</Render>
		</BadgeProvider>
	)
}

export const BadgeIndicator = (props: BadgeIndicatorProps) => {
	const { invisible, side, align, size, status } = useBadgeContext()

	const {
		className,
		children,
		...restProps
	} = props

	const dot = !children

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ invisible, side, align, size, status, dot })}
			defaultTagName="span"
			data-slot="badge-indicator"
			className={applyCn("badge__indicator", className)}
		>
			{children}
		</Render>
	)
}

BadgeProvider.displayName = "Badge.Provider"
BadgeRoot.displayName = "Badge.Root"
BadgeIndicator.displayName = "Badge.Indicator"