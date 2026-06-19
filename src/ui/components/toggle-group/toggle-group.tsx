"use client"

import type { ToggleGroupProps } from "./toggle-group.props"
import type { ToggleGroupContextValue } from "./toggle-group.types"

import { useMemo } from "react"

import { toClassNames, toDataAttrs } from "../../utils"

import { ToggleGroup as BaseToggleGroup } from "@base-ui/react/toggle-group"
import { ToggleGroupContext } from "./toggle-group.context"

export const ToggleGroup = <Value extends string>(props: ToggleGroupProps<Value>) => {
	const {
		iconOnly,
		variant = "secondary",
		size = "md",
		color = "info",
		className,
		children,
		...restProps
	} = props

	const contextValue = useMemo<ToggleGroupContextValue>(() => ({
		iconOnly,
		variant,
		size,
		color,
	}), [iconOnly, variant, size, color])

	return (
		<ToggleGroupContext value={contextValue}>
			<BaseToggleGroup
				{...restProps}
				{...toDataAttrs({ iconOnly, variant, size, color })}
				className={toClassNames("toggle-group", className)}
			>
				{children}
			</BaseToggleGroup>
		</ToggleGroupContext>
	)
}