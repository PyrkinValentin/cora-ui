"use client"

import type {
	BreadcrumbsRootProps,
	BreadcrumbsListProps,
	BreadcrumbsItemProps,
	BreadcrumbsSeparatorProps,
	BreadcrumbsLinkProps,
	BreadcrumbsPageProps,
	BreadcrumbsEllipsisProps,
} from "./breadcrumbs.props"

import { toClassNames } from "../../utils"

import { ChevronRight, Ellipsis } from "lucide-react"
import { Render } from "../../primitives"

export const BreadcrumbsRoot = (props: BreadcrumbsRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="nav"
			className={toClassNames("breadcrumbs", className)}
		>
			{children}
		</Render>
	)
}

export const BreadcrumbsList = (props: BreadcrumbsListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="ol"
			className={toClassNames("breadcrumbs__list", className)}
		>
			{children}
		</Render>
	)
}

export const BreadcrumbsItem = (props: BreadcrumbsItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="li"
			className={toClassNames("breadcrumbs__item", className)}
		>
			{children}
		</Render>
	)
}

export const BreadcrumbsSeparator = (props: BreadcrumbsSeparatorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="li"
			role="presentation"
			aria-hidden="true"
			className={toClassNames("breadcrumbs__separator", className)}
		>
			{children ?? <ChevronRight/>}
		</Render>
	)
}

export const BreadcrumbsLink = (props: BreadcrumbsLinkProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="a"
			className={toClassNames("breadcrumbs__link", className)}
		>
			{children}
		</Render>
	)
}

export const BreadcrumbsPage = (props: BreadcrumbsPageProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			role="link"
			aria-disabled="true"
			aria-current="page"
			className={toClassNames("breadcrumbs__page", className)}
		>
			{children}
		</Render>
	)
}

export const BreadcrumbsEllipsis = (props: BreadcrumbsEllipsisProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			role="presentation"
			aria-hidden="true"
			className={toClassNames("breadcrumbs__ellipsis", className)}
		>
			{children ?? <Ellipsis/>}
		</Render>
	)
}