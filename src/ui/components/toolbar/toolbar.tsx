"use client"

import type {
	ToolbarRootProps,
	ToolbarButtonProps,
	ToolbarLinkProps,
	ToolbarInputProps,
	ToolbarSeparatorProps,
	ToolbarGroupProps,
} from "./toolbar.props"

import { toClassNames } from "../../utils"

import { Toolbar } from "@base-ui/react/toolbar"

export const ToolbarRoot = (props: ToolbarRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toolbar.Root
			{...restProps}
			className={toClassNames("toolbar", className)}
		>
			{children}
		</Toolbar.Root>
	)
}

export const ToolbarButton = (props: ToolbarButtonProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toolbar.Button
			{...restProps}
			className={toClassNames("toolbar__button", className)}
		>
			{children}
		</Toolbar.Button>
	)
}

export const ToolbarLink = (props: ToolbarLinkProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toolbar.Link
			{...restProps}
			className={toClassNames("toolbar__link", className)}
		>
			{children}
		</Toolbar.Link>
	)
}

export const ToolbarInput = (props: ToolbarInputProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Toolbar.Input
			{...restProps}
			className={toClassNames("toolbar__input", className)}
		/>
	)
}

export const ToolbarSeparator = (props: ToolbarSeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Toolbar.Separator
			{...restProps}
			className={toClassNames("toolbar__separator", className)}
		/>
	)
}

export const ToolbarGroup = (props: ToolbarGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Toolbar.Group
			{...restProps}
			className={toClassNames("toolbar__group", className)}
		>
			{children}
		</Toolbar.Group>
	)
}