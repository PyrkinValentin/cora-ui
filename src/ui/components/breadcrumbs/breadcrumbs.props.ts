import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type BreadcrumbsRootState = object
export type BreadcrumbsListState = object
export type BreadcrumbsItemState = object
export type BreadcrumbsSeparatorState = object
export type BreadcrumbsLinkState = object
export type BreadcrumbsPageState = object
export type BreadcrumbsEllipsisState = object

export type BreadcrumbsRootProps = BaseUIComponentProps<"nav", BreadcrumbsRootState>
export type BreadcrumbsListProps = BaseUIComponentProps<"ol", BreadcrumbsListState>
export type BreadcrumbsItemProps = BaseUIComponentProps<"li", BreadcrumbsItemState>
export type BreadcrumbsSeparatorProps = BaseUIComponentProps<"li", BreadcrumbsSeparatorState>
export type BreadcrumbsLinkProps = BaseUIComponentProps<"a", BreadcrumbsLinkState>
export type BreadcrumbsPageProps = BaseUIComponentProps<"span", BreadcrumbsPageState>
export type BreadcrumbsEllipsisProps = BaseUIComponentProps<"span", BreadcrumbsEllipsisState>
