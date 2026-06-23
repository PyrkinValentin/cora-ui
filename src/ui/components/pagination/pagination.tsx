"use client"

import type {
	PaginationRootProps,
	PaginationListProps,
	PaginationItemProps,
	PaginationPrevProps,
	PaginationNextProps,
	PaginationPageProps,
	PaginationEllipsisProps,
} from "./pagination.props"

import type { MouseEvent } from "react"
import type { BaseUIEvent } from "@base-ui/react"
import type { PaginationRootContextValue } from "./pagination.types"

import { useMemo } from "react"
import { useStableCallback } from "../../hooks"
import { usePaginationRootContext, usePaginationSync } from "./pagination.hooks"

import { createChangeEventDetails } from "@base-ui/react/internals/createBaseUIEventDetails"
import { toClassNames, clamp, toDataAttrs } from "../../utils"

import { REASONS } from "../../constants"

import { Button } from "@base-ui/react/button"
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react"
import { Render } from "../../primitives"
import { PaginationRootContext } from "./pagination.context"

export const PaginationRoot = (props: PaginationRootProps) => {
	const {
		total,
		page = 1,
		size = "md",
		className,
		onPageChange: onPageChangeProp,
		children,
		...restProps
	} = props

	const onPageChange = useStableCallback(onPageChangeProp)

	usePaginationSync({
		page,
		total,
		onPageChange,
	})

	const contextValue = useMemo<PaginationRootContextValue>(() => ({
		size,
		total,
		page: clamp(page, 1, total),
		onPageChange,
	}), [size, total, page, onPageChange])

	return (
		<PaginationRootContext value={contextValue}>
			<Render
				{...restProps}
				defaultTagName="nav"
				state={{ page }}
				role="navigation"
				className={toClassNames("pagination", className)}
			>
				{children}
			</Render>
		</PaginationRootContext>
	)
}

export const PaginationList = (props: PaginationListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="ul"
			className={toClassNames("pagination__list", className)}
		>
			{children}
		</Render>
	)
}

export const PaginationItem = (props: PaginationItemProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			defaultTagName="li"
		>
			{children}
		</Render>
	)
}

export const PaginationPrev = (props: PaginationPrevProps) => {
	const { size, page, onPageChange } = usePaginationRootContext()

	const {
		disabled: disabledProp,
		className,
		onClick,
		children,
		...restProps
	} = props

	const disabled = disabledProp || page === 1

	const handleClick = (ev: BaseUIEvent<MouseEvent<HTMLButtonElement>>) => {
		onClick?.(ev)

		if (
			!disabled &&
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			onPageChange?.(
				page - 1,
				createChangeEventDetails(REASONS.prevPress, ev.nativeEvent),
			)
		}
	}

	return (
		<Button
			{...restProps}
			{...toDataAttrs({ size })}
			disabled={disabled}
			className={toClassNames("pagination__prev", className)}
			onClick={handleClick}
		>
			{children ?? <ChevronLeft/>}
		</Button>
	)
}

export const PaginationNext = (props: PaginationNextProps) => {
	const { size, page, total, onPageChange } = usePaginationRootContext()

	const {
		disabled: disabledProp,
		className,
		onClick,
		children,
		...restProps
	} = props

	const disabled = disabledProp || page === total

	const handleClick = (ev: BaseUIEvent<MouseEvent<HTMLButtonElement>>) => {
		onClick?.(ev)

		if (
			!disabled &&
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			onPageChange?.(
				page + 1,
				createChangeEventDetails(REASONS.nextPress, ev.nativeEvent),
			)
		}
	}

	return (
		<Button
			{...restProps}
			{...toDataAttrs({ size })}
			disabled={disabled}
			className={toClassNames("pagination__next", className)}
			onClick={handleClick}
		>
			{children ?? <ChevronRight/>}
		</Button>
	)
}

export const PaginationPage = (props: PaginationPageProps) => {
	const { size, page, onPageChange } = usePaginationRootContext()

	const {
		disabled: disabledProp,
		page: pageProp,
		className,
		onClick,
		...restProps
	} = props

	const current = pageProp === page
	const disabled = disabledProp || current

	const handleClick = (ev: BaseUIEvent<MouseEvent<HTMLButtonElement>>) => {
		onClick?.(ev)

		if (
			!disabled &&
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			onPageChange?.(
				pageProp,
				createChangeEventDetails(REASONS.pagePress, ev.nativeEvent),
			)
		}
	}

	return (
		<Button
			{...restProps}
			{...toDataAttrs({ size, current })}
			disabled={disabled}
			aria-current={
				current
					? "page"
					: undefined
			}
			className={toClassNames("pagination__page", className)}
			onClick={handleClick}
		>
			{pageProp}
		</Button>
	)
}

export const PaginationEllipsis = (props: PaginationEllipsisProps) => {
	const { size } = usePaginationRootContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ size })}
			defaultTagName="span"
			className={toClassNames("pagination__ellipsis", className)}
		>
			{children ?? <Ellipsis/>}
		</Render>
	)
}