"use client"

import type { SpinnerProps } from "./spinner.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Render } from "../render"

export const Spinner = (props: SpinnerProps) => {
	const {
		size = "md",
		color = "current",
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ size, color })}
			defaultTagName="span"
			className={toClassNames("spinner", className)}
		>
			{children}
		</Render>
	)
}

Spinner.displayName = "Spinner"