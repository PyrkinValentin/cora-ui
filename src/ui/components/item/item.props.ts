import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type ItemRootState = object
type ItemMediaState = object
type ItemContentState = object
type ItemTitleState = object
type ItemDescriptionState = object
type ItemActionState = object

export type ItemRootProps = BaseUIComponentProps<"div", ItemRootState>
export type ItemMediaProps = BaseUIComponentProps<"span", ItemMediaState>
export type ItemContentProps = BaseUIComponentProps<"div", ItemContentState>
export type ItemTitleProps = BaseUIComponentProps<"h2", ItemTitleState>
export type ItemDescriptionProps = BaseUIComponentProps<"p", ItemDescriptionState>
export type ItemActionProps = BaseUIComponentProps<"div", ItemActionState>