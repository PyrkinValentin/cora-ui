import { usePaginationManager } from "./pagination.hooks"

import {
	PaginationRoot,
	PaginationList,
	PaginationItem,
	PaginationPrev,
	PaginationNext,
	PaginationPage,
	PaginationEllipsis,
} from "./pagination"

export const Pagination = {
	Root: PaginationRoot,
	List: PaginationList,
	Item: PaginationItem,
	Prev: PaginationPrev,
	Next: PaginationNext,
	Page: PaginationPage,
	Ellipsis: PaginationEllipsis,
	useManager: usePaginationManager,
}