"use client"

import type {
	AccordionRootProps,
	AccordionItemProps,
	AccordionHeaderProps,
	AccordionIconProps,
	AccordionTriggerProps,
	AccordionPanelProps,
	AccordionContentProps,
} from "./accordion.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Accordion } from "@base-ui/react/accordion"
import { ChevronDown } from "lucide-react"
import { Render } from "../../primitives"

export const AccordionRoot = <Value = unknown>(props: AccordionRootProps<Value>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Accordion.Root
			{...restProps}
			className={toClassNames("accordion", className)}
		>
			{children}
		</Accordion.Root>
	)
}

export const AccordionItem = (props: AccordionItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Accordion.Item
			{...restProps}
			className={toClassNames("accordion__item", className)}
		>
			{children}
		</Accordion.Item>
	)
}

export const AccordionHeader = (props: AccordionHeaderProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Accordion.Header
			{...restProps}
			className={toClassNames("accordion__header", className)}
		>
			{children}
		</Accordion.Header>
	)
}

export const AccordionTrigger = (props: AccordionTriggerProps) => {
	const {
		disabled,
		className,
		children,
		...restProps
	} = props

	return (
		<Accordion.Trigger
			{...restProps}
			{...toDataAttrs({ disabled })}
			disabled={disabled}
			className={toClassNames("accordion__trigger", className)}
		>
			{children}
		</Accordion.Trigger>
	)
}

export const AccordionIcon = (props: AccordionIconProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="span"
			className={toClassNames("accordion__icon", className)}
		>
			{children ?? <ChevronDown/>}
		</Render>
	)
}

export const AccordionPanel = (props: AccordionPanelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Accordion.Panel
			{...restProps}
			className={toClassNames("accordion__panel", className)}
		>
			{children}
		</Accordion.Panel>
	)
}

export const AccordionContent = (props: AccordionContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			className={toClassNames("accordion__content", className)}
		>
			{children}
		</Render>
	)
}