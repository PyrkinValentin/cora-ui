import type { ButtonProps } from "@base-ui/react/button"
import type { BaseUIComponentProps } from "@base-ui/react/internals/types"
import type { BaseUIChangeEventDetails } from "@base-ui/react"
import type { REASONS } from "../../constants"

export type PaginationRootState = { page: number }
export type PaginationListState = object
export type PaginationItemState = object
export type PaginationEllipsisState = object

export type PaginationRootChangeEventReason =
	| typeof REASONS.prevPress
	| typeof REASONS.nextPress
	| typeof REASONS.pagePress
	| typeof REASONS.pageSync

export type PaginationRootChangeEventDetails = BaseUIChangeEventDetails<PaginationRootChangeEventReason>

export type PaginationRootProps = BaseUIComponentProps<"nav", PaginationRootState> & {
	/**
	 * Whether the component is disabled
	 */
	disabled?: boolean
	/**
	 * Total number of items
	 */
	total: number
	/**
	 * Current active page number
	 */
	page?: number
	/**
	 * The size of the component.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg"
	/**
	 * Callback triggered when the page changes
	 */
	onPageChange?: (page: number, eventDetails: PaginationRootChangeEventDetails) => void
}

export type PaginationListProps = BaseUIComponentProps<"ul", PaginationListState>
export type PaginationItemProps = BaseUIComponentProps<"li", PaginationItemState>
export type PaginationPrevProps = ButtonProps
export type PaginationNextProps = ButtonProps
export type PaginationPageProps = ButtonProps & {
	/**
	 * Current active page number
	 */
	page: number
}

export type PaginationEllipsisProps = BaseUIComponentProps<"span", PaginationEllipsisState>