"use client"

import type { ToggleProps } from "./toggle.props"

import { useToggleGroupContext } from "../toggle-group/toggle-group.hooks"

import { toClassNames, toDataAttrs } from "../../utils"

import { Toggle as BaseToggle } from "@base-ui/react/toggle"

export const Toggle = <Value extends string>(props: ToggleProps<Value>) => {
	const contextValue = useToggleGroupContext()

	const {
		iconOnly = contextValue.iconOnly,
		variant = contextValue.variant ?? "secondary",
		size = contextValue.size ?? "md",
		color = contextValue.color ?? "info",
		className,
		children,
		...restProps
	} = props

	return (
		<BaseToggle
			{...restProps}
			{...toDataAttrs({ iconOnly, variant, size, color })}
			className={toClassNames("toggle", className)}
		>
			{children}
		</BaseToggle>
	)
}