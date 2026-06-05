"use client"

import type { BadgeRootProps, BadgeIndicatorProps } from "./badge.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Render } from "../render"

export const BadgeRoot = (props: BadgeRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			className={toClassNames("badge", className)}
		>
			{children}
		</Render>
	)
}

export const BadgeIndicator = (props: BadgeIndicatorProps) => {
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

	const dot = !children

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ invisible, dot, side, align, size, status })}
			defaultTagName="span"
			state={{ invisible }}
			className={toClassNames("badge__indicator", className)}
		>
			{children}
		</Render>
	)
}

BadgeRoot.displayName = "Badge.Root"
BadgeIndicator.displayName = "Badge.Indicator"