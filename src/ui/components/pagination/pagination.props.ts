import type { ButtonProps } from "@base-ui/react/button"
import type { BaseUIComponentProps } from "@base-ui/react/internals/types"
import type { PaginationRootChangeEventDetails } from "./pagination.types"

export type PaginationRootProps = BaseUIComponentProps<"nav", unknown> & {
	total: number
	page?: number
	size?: "sm" | "md" | "lg"
	onPageChange?: (page: number, eventDetails: PaginationRootChangeEventDetails) => void
	onPageSync?: (page: number) => void
}

export type PaginationListProps = BaseUIComponentProps<"ul", unknown>
export type PaginationItemProps = BaseUIComponentProps<"li", unknown>
export type PaginationPrevProps = ButtonProps
export type PaginationNextProps = ButtonProps

export type PaginationPageProps = ButtonProps & {
	page: number
}

export type PaginationEllipsisProps = BaseUIComponentProps<"span", unknown>