import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type TableRootState = object
type TableCaptionState = object
type TableHeaderState = object
type TableBodyState = object
type TableRowState = object
type TableHeadState = object
type TableCellState = object
type TableFooterState = object

export type TableRootProps = BaseUIComponentProps<"table", TableRootState>
export type TableCaptionProps = BaseUIComponentProps<"caption", TableCaptionState>
export type TableHeaderProps = BaseUIComponentProps<"thead", TableHeaderState>
export type TableBodyProps = BaseUIComponentProps<"tbody", TableBodyState>
export type TableRowProps = BaseUIComponentProps<"tr", TableRowState>
export type TableHeadProps = BaseUIComponentProps<"th", TableHeadState>
export type TableCellProps = BaseUIComponentProps<"td", TableCellState>
export type TableFooterProps = BaseUIComponentProps<"tfoot", TableFooterState>