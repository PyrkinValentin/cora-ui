"use client"

import type { AvatarGroupProps } from "./avatar-group.props"
import type { AvatarGroupContextValue } from "./avatar-group.types"

import { useMemo } from "react"

import { toClassNames, toDataAttrs } from "../../utils"

import { Render } from "../../primitives"
import { AvatarGroupContext } from "./avatar-group.context"

export const AvatarGroup = (props: AvatarGroupProps) => {
	const {
		orientation = "horizontal",
		size = "md",
		color = "neutral",
		className,
		children,
		...restProps
	} = props

	const contextValue = useMemo<AvatarGroupContextValue>(() => ({
		size,
		color,
	}), [size, color])

	return (
		<AvatarGroupContext value={contextValue}>
			<Render
				{...restProps}
				{...toDataAttrs({ orientation, size, color })}
				defaultTagName="div"
				role="group"
				className={toClassNames("avatar-group", className)}
			>
				{children}
			</Render>
		</AvatarGroupContext>
	)
}