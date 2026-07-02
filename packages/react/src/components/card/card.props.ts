import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type CardRootState = object

export type CardRootProps = BaseUIComponentProps<"div", CardRootState>

export type CardContentState = object

export type CardContentProps = BaseUIComponentProps<"div", CardContentState>

export type CardTitleState = object

export type CardTitleProps = BaseUIComponentProps<"h2", CardTitleState>

export type CardDescriptionState = object

export type CardDescriptionProps = BaseUIComponentProps<"p", CardDescriptionState>