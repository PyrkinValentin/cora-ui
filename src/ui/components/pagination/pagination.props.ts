import type { ButtonProps, ButtonState } from "@base-ui/react/button"
import type { UIChangeEventDetails, UIComponentProps } from "../../types"

export type PaginationRootState = { page: number }
export type PaginationRootChangeEventReason = "prev" | "next" | "button" | "sync"
export type PaginationRootChangeEventDetails = UIChangeEventDetails<PaginationRootChangeEventReason>
export type PaginationRootProps = UIComponentProps<"nav", PaginationRootState> & {
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
export type PaginationListState = object
export type PaginationListProps = UIComponentProps<"ul", PaginationListState>

export type PaginationItemState = object
export type PaginationItemProps = UIComponentProps<"li", PaginationItemState>

export type PaginationPrevState = ButtonState
export type PaginationPrevProps = ButtonProps

export type PaginationNextState = ButtonState
export type PaginationNextProps = ButtonProps

export type PaginationPageState = ButtonState
export type PaginationPageProps = ButtonProps & {
	/**
	 * Current active page number
	 */
	page: number
}

export type PaginationEllipsisState = object
export type PaginationEllipsisProps = UIComponentProps<"span", PaginationEllipsisState>