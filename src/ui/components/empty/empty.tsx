"use client"

import type {
	EmptyRootProps,
	EmptyIconProps,
	EmptyTitleProps,
	EmptyDescriptionProps,
} from "./empty.props"

import { toClassNames } from "../../utils"

import { Render } from "../../primitives"

export const EmptyRoot = (props: EmptyRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("empty", className)}
		>
			{children}
		</Render>
	)
}

export const EmptyIcon = (props: EmptyIconProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			className={toClassNames("empty__icon", className)}
		>
			{children}
		</Render>
	)
}

export const EmptyTitle = (props: EmptyTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="h2"
			className={toClassNames("empty__title", className)}
		>
			{children}
		</Render>
	)
}

export const EmptyDescription = (props: EmptyDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="p"
			className={toClassNames("empty__description", className)}
		>
			{children}
		</Render>
	)
}