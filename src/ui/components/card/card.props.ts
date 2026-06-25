import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type CardRootState = object
export type CardContentState = object
export type CardTitleState = object
export type CardDescriptionState = object

export type CardRootProps = BaseUIComponentProps<"div", CardRootState>
export type CardContentProps = BaseUIComponentProps<"div", CardContentState>
export type CardTitleProps = BaseUIComponentProps<"h2", CardTitleState>
export type CardDescriptionProps = BaseUIComponentProps<"p", CardDescriptionState>