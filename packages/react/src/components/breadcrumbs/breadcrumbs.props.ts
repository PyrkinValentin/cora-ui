import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type BreadcrumbsRootState = object

export type BreadcrumbsRootProps = BaseUIComponentProps<"nav", BreadcrumbsRootState>

export type BreadcrumbsListState = object

export type BreadcrumbsListProps = BaseUIComponentProps<"ol", BreadcrumbsListState>

export type BreadcrumbsItemState = object

export type BreadcrumbsItemProps = BaseUIComponentProps<"li", BreadcrumbsItemState>

export type BreadcrumbsSeparatorState = object

export type BreadcrumbsSeparatorProps = BaseUIComponentProps<"li", BreadcrumbsSeparatorState>

export type BreadcrumbsLinkState = object

export type BreadcrumbsLinkProps = BaseUIComponentProps<"a", BreadcrumbsLinkState>

export type BreadcrumbsPageState = object

export type BreadcrumbsPageProps = BaseUIComponentProps<"span", BreadcrumbsPageState>

export type BreadcrumbsEllipsisState = object

export type BreadcrumbsEllipsisProps = BaseUIComponentProps<"span", BreadcrumbsEllipsisState>