import type { PaginationEllipsisType, PaginationReason } from "./pagination.types"

export const PAGINATION_ELLIPSIS_TYPE: PaginationEllipsisType = {
	ellipsisStart: "ellipsis-start",
	ellipsisEnd: "ellipsis-end",
}

export const REASONS: Record<PaginationReason, PaginationReason> = {
	prev: "prev",
	next: "next",
	button: "button",
}