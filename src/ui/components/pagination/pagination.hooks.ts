"use client"

import type { UsePaginationOptions, UsePaginationReturn, UsePaginationSyncOptions } from "./pagination.types"

import { use, useLayoutEffect, useMemo } from "react"

import { range } from "./pagination.utils"

import { PAGINATION_ELLIPSIS_TYPE } from "./pagination.vars"

import { PaginationContext } from "./pagination.context"

export const usePaginationContext = () => use(PaginationContext)

export const usePaginationSync = (options: UsePaginationSyncOptions) => {
	const {
		page,
		total,
		onPageSync,
	} = options

	useLayoutEffect(() => {
		if (!onPageSync || total <= 0) return

		if (page > total) {
			onPageSync(total)
		} else if (page < 1) {
			onPageSync(1)
		}
	}, [total, page, onPageSync])
}

export const usePagination = (options: UsePaginationOptions): UsePaginationReturn => {
	const {
		page,
		total,
		siblings = 1,
		boundaries = 1,
	} = options

	const pages = useMemo(() => {
		const totalPageNumbers = siblings * 2 + 3 + boundaries * 2

		if (totalPageNumbers >= total) {
			return range(1, total)
		}

		const leftSiblingIndex = Math.max(page - siblings, boundaries)
		const rightSiblingIndex = Math.min(page + siblings, total - boundaries)

		const shouldShowLeftDots = leftSiblingIndex > boundaries + 2
		const shouldShowRightDots = rightSiblingIndex < total - (boundaries + 1)

		if (!shouldShowLeftDots && shouldShowRightDots) {
			const leftItemCount = siblings * 2 + boundaries + 2

			return [
				...range(1, leftItemCount),
				PAGINATION_ELLIPSIS_TYPE.ellipsisEnd,
				...range(total - (boundaries - 1), total),
			]
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = boundaries + 1 + 2 * siblings

			return [
				...range(1, boundaries),
				PAGINATION_ELLIPSIS_TYPE.ellipsisStart,
				...range(total - rightItemCount, total),
			]
		}

		return [
			...range(1, boundaries),
			PAGINATION_ELLIPSIS_TYPE.ellipsisStart,
			...range(leftSiblingIndex, rightSiblingIndex),
			PAGINATION_ELLIPSIS_TYPE.ellipsisEnd,
			...range(total - boundaries + 1, total),
		]
	}, [total, page, siblings, boundaries])

	return useMemo(() => ({
		currentPage: page,
		pages,
		total,
	}), [page, pages, total])
}