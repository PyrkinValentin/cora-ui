"use client"

import type { SeparatorProps } from "./separator.props"

import { toClassNames } from "../../utils"

import { Separator as BaseSeparator } from "@base-ui/react/separator"

export const Separator = (props: SeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<BaseSeparator
			{...restProps}
			className={toClassNames("separator", className)}
		/>
	)
}

Separator.displayName = "Separator"