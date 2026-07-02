"use client"

import type { CardRootProps, CardContentProps, CardTitleProps, CardDescriptionProps } from "./card.props"

import { toClassNames } from "../../utils"

import { Render } from "../../primitives"

/**
 * The root container for card components that holds structural layout and styles.
 * Renders a `<div>` element.
 */
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

/**
 * A container wrapper for the internal content and body elements of a card.
 * Renders a `<div>` element.
 */
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

/**
 * The heading or primary title displayed within a card.
 * Renders an `<h2>` element.
 */
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

/**
 * The secondary or descriptive text providing context within a card.
 * Renders a `<p>` element.
 */
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
