"use client"

import type {
	AccordionRootProps,
	AccordionItemProps,
	AccordionHeaderProps,
	AccordionTriggerProps,
	AccordionIconProps,
	AccordionPanelProps,
	AccordionContentProps,
} from "./accordion.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Accordion } from "@base-ui/react/accordion"
import { ChevronDown } from "../../icons"
import { Render } from "../../primitives"

/**
 * Groups all parts of the accordion.
 * Renders a `<div>` element.
 */
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

/**
 * Groups an accordion header with the corresponding panel.
 * Renders a `<div>` element.
 */
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

/**
 * A heading that labels the corresponding panel.
 * Renders an `<h3>` element.
 */
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

/**
 * A button that opens and closes the corresponding panel.
 * Renders a `<button>` element.
 */
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

/**
 * A visual indicator that changes state when the panel opens or closes.
 * Renders a `<span>` element.
 */
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

/**
 * A collapsible panel with the accordion item contents.
 * Renders a `<div>` element.
 */
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

/**
 * A panel that contains the collapsible content of an accordion item.
 * Renders a `<div>` element.
 */
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