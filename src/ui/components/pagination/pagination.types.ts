import type {
	PaginationRootChangeEventReason,
	PaginationRootChangeEventDetails,
	PaginationRootProps,
} from "./pagination.props"

export type PaginationEllipsisType = "ellipsis-start" | "ellipsis-end"
export type PaginationEllipsis = Record<"ellipsisStart" | "ellipsisEnd", PaginationEllipsisType>
export type PaginationReasons = Record<PaginationRootChangeEventReason, PaginationRootChangeEventReason>

type PaginationSize = PaginationRootProps["size"]

export type PaginationRootContextValue = {
	size: PaginationSize
	total: number
	page: number
	onPageChange?: (page: number, eventDetails: PaginationRootChangeEventDetails) => void
}

export type UsePaginationSyncOptions = {
	page: number
	total: number
	onPageChange?: (page: number, eventDetails: PaginationRootChangeEventDetails) => void
}

export type UsePaginationManagerOptions = {
	total: number
	page: number
	siblings?: number
	boundaries?: number
	onPageChange?: (page: number, eventDetails: PaginationRootChangeEventDetails) => void
}

export type UsePaginationManagerReturn = {
	page: number
	pages: (number | PaginationEllipsisType)[]
	total: number
	onPageChange?: (page: number, eventDetails: PaginationRootChangeEventDetails) => void
}