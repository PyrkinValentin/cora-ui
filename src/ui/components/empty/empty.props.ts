import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type EmptyRootState = object
export type EmptyIconState = object
export type EmptyTitleState = object
export type EmptyDescriptionState = object

export type EmptyRootProps = BaseUIComponentProps<"div", EmptyRootState>
export type EmptyIconProps = BaseUIComponentProps<"span", EmptyIconState>
export type EmptyTitleProps = BaseUIComponentProps<"h2", EmptyTitleState>
export type EmptyDescriptionProps = BaseUIComponentProps<"p", EmptyDescriptionState>