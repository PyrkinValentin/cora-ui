"use client"

import type { CardRootProps, CardContentProps, CardTitleProps, CardDescriptionProps } from "./card.props"

import { toClassNames } from "../../utils"

import { Render } from "../../primitives"

export const CardRoot = (props: CardRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("card", className)}
		>
			{children}
		</Render>
	)
}

export const CardContent = (props: CardContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("card__content", className)}
		>
			{children}
		</Render>
	)
}

export const CardTitle = (props: CardTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="h2"
			className={toClassNames("card__title", className)}
		>
			{children}
		</Render>
	)
}

export const CardDescription = (props: CardDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="p"
			className={toClassNames("card__description", className)}
		>
			{children}
		</Render>
	)
}