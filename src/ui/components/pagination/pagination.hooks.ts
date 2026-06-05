"use client"

import type {
	UsePaginationSyncOptions,
	UsePaginationManagerOptions,
	UsePaginationManagerReturn,
} from "./pagination.types"

import { use, useEffect, useMemo } from "react"

import { clamp, createChangeEventDetails } from "../../utils"
import { range } from "./pagination.utils"

import { PAGINATION_ELLIPSIS, PAGINATION_REASONS } from "./pagination.constants"

import { PaginationRootContext } from "./pagination.context"

export const usePaginationRootContext = () => use(PaginationRootContext)

export const usePaginationSync = (options: UsePaginationSyncOptions) => {
	const {
		page,
		total,
		onPageChange,
	} = options

	useEffect(() => {
		if (!onPageChange || total <= 0) return

		const validPage = clamp(page, 1, total)

		if (page !== validPage) {
			onPageChange(
				validPage,
				createChangeEventDetails(PAGINATION_REASONS.sync),
			)
		}
	}, [total, page, onPageChange])
}

export const usePaginationManager = (options: UsePaginationManagerOptions): UsePaginationManagerReturn => {
	const {
		page,
		total,
		siblings = 1,
		boundaries = 1,
		onPageChange,
	} = options

	const pages = useMemo(() => {
		if (total <= 0) return []

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
				PAGINATION_ELLIPSIS.ellipsisEnd,
				...range(total - (boundaries - 1), total),
			]
		}

		if (shouldShowLeftDots && !shouldShowRightDots) {
			const rightItemCount = boundaries + 1 + 2 * siblings

			return [
				...range(1, boundaries),
				PAGINATION_ELLIPSIS.ellipsisStart,
				...range(total - rightItemCount, total),
			]
		}

		return [
			...range(1, boundaries),
			PAGINATION_ELLIPSIS.ellipsisStart,
			...range(leftSiblingIndex, rightSiblingIndex),
			PAGINATION_ELLIPSIS.ellipsisEnd,
			...range(total - boundaries + 1, total),
		]
	}, [total, page, siblings, boundaries])

	return {
		page,
		pages,
		total,
		onPageChange,
	}
}