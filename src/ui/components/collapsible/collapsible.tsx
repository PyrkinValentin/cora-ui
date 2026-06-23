"use client"

import type {
	CollapsibleRootProps,
	CollapsibleTriggerProps,
	CollapsibleIconProps,
	CollapsiblePanelProps,
	CollapsibleContentProps,
} from "./collapsible.props"

import { toClassNames } from "../../utils"

import { Collapsible } from "@base-ui/react/collapsible"
import { ChevronDown } from "lucide-react"
import { Render } from "../../primitives"

export const CollapsibleRoot = (props: CollapsibleRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Collapsible.Root
			{...restProps}
			className={toClassNames("collapsible", className)}
		>
			{children}
		</Collapsible.Root>
	)
}

export const CollapsibleTrigger = (props: CollapsibleTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Collapsible.Trigger
			{...restProps}
			className={toClassNames("collapsible__trigger", className)}
		>
			{children}
		</Collapsible.Trigger>
	)
}

export const CollapsibleIcon = (props: CollapsibleIconProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			className={toClassNames("collapsible__icon", className)}
		>
			{children ?? <ChevronDown/>}
		</Render>
	)
}

export const CollapsiblePanel = (props: CollapsiblePanelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Collapsible.Panel
			{...restProps}
			className={toClassNames("collapsible__panel", className)}
		>
			{children}
		</Collapsible.Panel>
	)
}

export const CollapsibleContent = (props: CollapsibleContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("collapsible__content", className)}
		>
			{children}
		</Render>
	)
}