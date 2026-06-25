import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type TableRootState = object
export type TableCaptionState = object
export type TableHeaderState = object
export type TableBodyState = object
export type TableRowState = object
export type TableHeadState = object
export type TableCellState = object
export type TableFooterState = object

export type TableRootProps = BaseUIComponentProps<"table", TableRootState>
export type TableCaptionProps = BaseUIComponentProps<"caption", TableCaptionState>
export type TableHeaderProps = BaseUIComponentProps<"thead", TableHeaderState>
export type TableBodyProps = BaseUIComponentProps<"tbody", TableBodyState>
export type TableRowProps = BaseUIComponentProps<"tr", TableRowState>
export type TableHeadProps = BaseUIComponentProps<"th", TableHeadState>
export type TableCellProps = BaseUIComponentProps<"td", TableCellState>
export type TableFooterProps = BaseUIComponentProps<"tfoot", TableFooterState>