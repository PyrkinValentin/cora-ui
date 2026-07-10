"use client"

import type { LinkProps } from "./link.props"

import { toClassNames } from "../../utils"

import { Render } from "../../primitives"

/**
 * A link component that can be used to navigate between pages.
 * Renders an `<a>` element.
 */
export const Link = (props: LinkProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="a"
			className={toClassNames("link", className)}
		/>
	)
}