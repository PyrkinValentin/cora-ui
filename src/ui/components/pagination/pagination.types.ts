import type { ReactNode } from "react"
import type { BaseUIChangeEventDetails } from "@base-ui/react"
import type { PaginationRootProps } from "./pagination.props"

type PaginationSize = PaginationRootProps["size"]

export type PaginationContextValue = {
	size: PaginationSize
	total: number
	page: number
	onPageChange?: (page: number, eventDetails: PaginationRootChangeEventDetails) => void
}

export type PaginationProviderProps = PaginationContextValue & {
	children: ReactNode
}

export type PaginationReason = "prev" | "next" | "button"

export type PaginationRootChangeEventDetails =
	BaseUIChangeEventDetails<PaginationReason>

export type PaginationEllipsis = "ellipsis-start" | "ellipsis-end"
export type PaginationEllipsisType = Record<"ellipsisStart" | "ellipsisEnd", PaginationEllipsis>

export type UsePaginationSyncOptions = {
	page: number
	total: number
	onPageSync?: (page: number) => void
}

export type UsePaginationOptions = {
	total: number
	page: number
	siblings?: number
	boundaries?: number
}

export type UsePaginationReturn = {
	currentPage: number
	pages: (number | PaginationEllipsis)[]
	total: number
}