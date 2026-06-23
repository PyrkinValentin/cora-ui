"use client"

import type { HeadingProps } from "./heading.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Render } from "../render"

export const Heading = (props: HeadingProps) => {
	const {
		level = "1",
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ level })}
			defaultTagName={`h${level}`}
			className={toClassNames("heading", className)}
		>
			{children}
		</Render>
	)
}