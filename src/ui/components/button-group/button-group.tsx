"use client"

import type { ButtonGroupProps } from "./button-group.props"
import type { ButtonGroupContextValue } from "./button-group.types"

import { useMemo } from "react"

import { toClassNames, toDataAttrs } from "../../utils"

import { Render } from "../../primitives"
import { ButtonGroupContext } from "./button-group.context"

export const ButtonGroup = (props: ButtonGroupProps) => {
	const {
		iconOnly,
		orientation = "horizontal",
		variant = "primary",
		size = "md",
		className,
		children,
		...restProps
	} = props

	const contextValue = useMemo<ButtonGroupContextValue>(() => ({
		iconOnly,
		variant,
		size,
	}), [iconOnly, variant, size])

	return (
		<ButtonGroupContext value={contextValue}>
			<Render
				{...restProps}
				{...toDataAttrs({ iconOnly, orientation, variant, size })}
				defaultTagName="div"
				role="group"
				className={toClassNames("button-group", className)}
			>
				{children}
			</Render>
		</ButtonGroupContext>
	)
}