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
import type { UIEvent } from "../../types"
import type { PaginationRootContextValue } from "./pagination.types"

import { useMemo } from "react"
import { useStableCallback } from "../../hooks"
import { usePaginationRootContext, usePaginationSync } from "./pagination.hooks"

import { createChangeEventDetails, toClassNames, clamp, toDataAttrs } from "../../utils"

import { PAGINATION_REASONS } from "./pagination.constants"

import { Button } from "@base-ui/react/button"
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react"
import { Render } from "../render"
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

	const handleClick = (ev: UIEvent<MouseEvent<HTMLButtonElement>>) => {
		onClick?.(ev)

		if (
			!disabled &&
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			onPageChange?.(
				page - 1,
				createChangeEventDetails(PAGINATION_REASONS.prev, ev.nativeEvent),
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

	const handleClick = (ev: UIEvent<MouseEvent<HTMLButtonElement>>) => {
		onClick?.(ev)

		if (
			!disabled &&
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			onPageChange?.(
				page + 1,
				createChangeEventDetails(PAGINATION_REASONS.next, ev.nativeEvent),
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

	const handleClick = (ev: UIEvent<MouseEvent<HTMLButtonElement>>) => {
		onClick?.(ev)

		if (
			!disabled &&
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			onPageChange?.(
				pageProp,
				createChangeEventDetails(PAGINATION_REASONS.button, ev.nativeEvent),
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

PaginationRoot.displayName = "Pagination.Root"
PaginationList.displayName = "Pagination.List"
PaginationItem.displayName = "Pagination.Item"
PaginationPrev.displayName = "Pagination.Prev"
PaginationNext.displayName = "Pagination.Next"
PaginationPage.displayName = "Pagination.Page"
PaginationEllipsis.displayName = "Pagination.Ellipsis"