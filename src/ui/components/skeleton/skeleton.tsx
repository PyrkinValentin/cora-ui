"use client"

import type { SkeletonProps } from "./skeleton.props"

import { toClassNames } from "../../utils"

import { Render } from "../render"

export const Skeleton = (props: SkeletonProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			aria-hidden="true"
			className={toClassNames("skeleton", className)}
		/>
	)
}

Skeleton.displayName = "Skeleton"