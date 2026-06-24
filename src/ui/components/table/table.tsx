"use client"

import type {
	TableRootProps,
	TableCaptionProps,
	TableHeaderProps,
	TableBodyProps,
	TableRowProps,
	TableHeadProps,
	TableCellProps,
	TableFooterProps,
} from "./table.props"

import { toClassNames } from "../../utils"

import { Render } from "../../primitives"

export const TableRoot = (props: TableRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="table"
			className={toClassNames("table", className)}
		>
			{children}
		</Render>
	)
}

export const TableCaption = (props: TableCaptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="caption"
			className={toClassNames("table__caption", className)}
		>
			{children}
		</Render>
	)
}

export const TableHeader = (props: TableHeaderProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="thead"
			className={toClassNames("table__header", className)}
		>
			{children}
		</Render>
	)
}

export const TableBody = (props: TableBodyProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="tbody"
			className={toClassNames("table__body", className)}
		>
			{children}
		</Render>
	)
}

export const TableRow = (props: TableRowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="tr"
			className={toClassNames("table__row", className)}
		>
			{children}
		</Render>
	)
}

export const TableHead = (props: TableHeadProps) => {
	const {
		scope = "col",
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="th"
			scope={scope}
			className={toClassNames("table__head", className)}
		>
			{children}
		</Render>
	)
}

export const TableCell = (props: TableCellProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="td"
			className={toClassNames("table__cell", className)}
		>
			{children}
		</Render>
	)
}

export const TableFooter = (props: TableFooterProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="tfoot"
			className={toClassNames("table__footer", className)}
		>
			{children}
		</Render>
	)
}