"use client"

import type {
	ItemRootProps,
	ItemMediaProps,
	ItemContentProps,
	ItemTitleProps,
	ItemDescriptionProps,
	ItemActionProps,
} from "./item.props"

import { toClassNames } from "../../utils"

import { Render } from "../render"

export const ItemRoot = (props: ItemRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("item", className)}
		>
			{children}
		</Render>
	)
}

export const ItemMedia = (props: ItemMediaProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			className={toClassNames("item__media", className)}
		>
			{children}
		</Render>
	)
}

export const ItemContent = (props: ItemContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("item__content", className)}
		>
			{children}
		</Render>
	)
}

export const ItemTitle = (props: ItemTitleProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="h2"
			className={toClassNames("item__title", className)}
		>
			{children}
		</Render>
	)
}

export const ItemDescription = (props: ItemDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="p"
			className={toClassNames("item__description", className)}
		>
			{children}
		</Render>
	)
}

export const ItemAction = (props: ItemActionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("item__action", className)}
		>
			{children}
		</Render>
	)
}