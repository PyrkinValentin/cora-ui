import {
	PaginationRoot,
	PaginationList,
	PaginationItem,
	PaginationPrev,
	PaginationNext,
	PaginationPage,
	PaginationEllipsis
} from "./pagination"

import { usePagination } from "./pagination.hooks"

export const Pagination = {
	Root: PaginationRoot,
	List: PaginationList,
	Item: PaginationItem,
	Prev: PaginationPrev,
	Next: PaginationNext,
	Page: PaginationPage,
	Ellipsis: PaginationEllipsis,
	usePagination,
}