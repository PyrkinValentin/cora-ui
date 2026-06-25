import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type ItemRootState = object
export type ItemMediaState = object
export type ItemContentState = object
export type ItemTitleState = object
export type ItemDescriptionState = object
export type ItemActionState = object

export type ItemRootProps = BaseUIComponentProps<"div", ItemRootState>
export type ItemMediaProps = BaseUIComponentProps<"span", ItemMediaState>
export type ItemContentProps = BaseUIComponentProps<"div", ItemContentState>
export type ItemTitleProps = BaseUIComponentProps<"h2", ItemTitleState>
export type ItemDescriptionProps = BaseUIComponentProps<"p", ItemDescriptionState>
export type ItemActionProps = BaseUIComponentProps<"div", ItemActionState>