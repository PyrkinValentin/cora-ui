import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type EmptyRootState = object
type EmptyIconState = object
type EmptyTitleState = object
type EmptyDescriptionState = object

export type EmptyRootProps = BaseUIComponentProps<"div", EmptyRootState>
export type EmptyIconProps = BaseUIComponentProps<"span", EmptyIconState>
export type EmptyTitleProps = BaseUIComponentProps<"h2", EmptyTitleState>
export type EmptyDescriptionProps = BaseUIComponentProps<"p", EmptyDescriptionState>