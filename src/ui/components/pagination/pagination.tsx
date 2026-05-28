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
import type { PaginationContextValue, PaginationProviderProps } from "./pagination.types"

import { useMemo } from "react"
import { useStableCallback } from "../../hooks"
import { usePaginationContext, usePaginationSync } from "./pagination.hooks"

import { createChangeEventDetails } from "@base-ui/react/internals/createBaseUIEventDetails"
import { applyCn, clamp, toDataAttrs } from "../../utils"

import { REASONS } from "./pagination.vars"

import { Button } from "@base-ui/react/button"
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react"
import { Render } from "../render"
import { PaginationContext } from "./pagination.context"

const PaginationProvider = (props: PaginationProviderProps) => {
	const {
		size,
		total,
		page,
		onPageChange,
		children,
	} = props

	const contextValue = useMemo<PaginationContextValue>(() => ({
		size,
		total,
		page: clamp(page, 1, total),
		onPageChange,
	}), [size, total, page, onPageChange])

	return (
		<PaginationContext value={contextValue}>
			{children}
		</PaginationContext>
	)
}

export const PaginationRoot = (props: PaginationRootProps) => {
	const {
		total,
		page = 1,
		size = "md",
		className,
		onPageChange: onPageChangeProp,
		onPageSync: onPageSyncProp,
		children,
		...restProps
	} = props

	const onPageChange = useStableCallback(onPageChangeProp)
	const onPageSync = useStableCallback(onPageSyncProp)

	usePaginationSync({
		page,
		total,
		onPageSync,
	})

	if (total <= 0) return null

	return (
		<PaginationProvider
			size={size}
			total={total}
			page={page}
			onPageChange={onPageChange}
		>
			<Render
				{...restProps}
				{...toDataAttrs({ size })}
				defaultTagName="nav"
				data-slot="pagination"
				role="navigation"
				className={applyCn("pagination", className)}
			>
				{children}
			</Render>
		</PaginationProvider>
	)
}

export const PaginationList = (props: PaginationListProps) => {
	const { size } = usePaginationContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ size })}
			defaultTagName="ul"
			data-slot="pagination-list"
			className={applyCn("pagination__list", className)}
		>
			{children}
		</Render>
	)
}

export const PaginationItem = (props: PaginationItemProps) => {
	const { size } = usePaginationContext()

	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Render
			{...restProps}
			{...toDataAttrs({ size })}
			defaultTagName="li"
			data-slot="pagination-item"
			className={applyCn("pagination__item", className)}
		>
			{children}
		</Render>
	)
}

export const PaginationPrev = (props: PaginationPrevProps) => {
	const { size, page, onPageChange } = usePaginationContext()

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

		if (disabled) {
			ev.preventDefault()
			ev.preventBaseUIHandler()
			return
		}

		if (
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			const nextPage = page - 1
			const eventDetails = createChangeEventDetails(REASONS.prev, ev.nativeEvent)

			onPageChange?.(nextPage, eventDetails)
		}
	}

	return (
		<Button
			{...restProps}
			{...toDataAttrs({ size })}
			data-slot="pagination-prev"
			disabled={disabled}
			className={applyCn("pagination__prev", className)}
			onClick={handleClick}
		>
			{children ?? <ChevronLeft/>}
		</Button>
	)
}

export const PaginationNext = (props: PaginationNextProps) => {
	const { size, page, total, onPageChange } = usePaginationContext()

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

		if (disabled) {
			ev.preventDefault()
			ev.preventBaseUIHandler()
			return
		}

		if (
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			const nextPage = page + 1
			const eventDetails = createChangeEventDetails(REASONS.next, ev.nativeEvent)

			onPageChange?.(nextPage, eventDetails)
		}
	}

	return (
		<Button
			{...restProps}
			{...toDataAttrs({ size })}
			data-slot="pagination-next"
			disabled={disabled}
			className={applyCn("pagination__next", className)}
			onClick={handleClick}
		>
			{children ?? <ChevronRight/>}
		</Button>
	)
}

export const PaginationPage = (props: PaginationPageProps) => {
	const { size, page: currentPage, onPageChange } = usePaginationContext()

	const {
		disabled: disabledProp,
		page,
		className,
		onClick,
		...restProps
	} = props

	const current = page === currentPage
	const disabled = disabledProp || current

	const handleClick = (ev: BaseUIEvent<MouseEvent<HTMLButtonElement>>) => {
		onClick?.(ev)

		if (disabled) {
			ev.preventDefault()
			ev.preventBaseUIHandler()
			return
		}

		if (
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			const eventDetails = createChangeEventDetails(REASONS.button, ev.nativeEvent)

			onPageChange?.(page, eventDetails)
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
			data-slot="pagination-button"
			className={applyCn("pagination__button", className)}
			onClick={handleClick}
		>
			{page}
		</Button>
	)
}

export const PaginationEllipsis = (props: PaginationEllipsisProps) => {
	const { size } = usePaginationContext()

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
			data-slot="pagination-ellipsis"
			className={applyCn("pagination__ellipsis", className)}
		>
			{children ?? <Ellipsis/>}
		</Render>
	)
}

PaginationProvider.displayName = "Pagination.Provider"
PaginationRoot.displayName = "Pagination.Root"
PaginationList.displayName = "Pagination.List"
PaginationItem.displayName = "Pagination.Item"
PaginationPrev.displayName = "Pagination.Prev"
PaginationNext.displayName = "Pagination.Next"
PaginationPage.displayName = "Pagination.Page"
PaginationEllipsis.displayName = "Pagination.Ellipsis"