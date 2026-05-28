import type { JSX } from "react"
import type { UseRenderParameters } from "@base-ui/react/use-render"
import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type RenderProps<DefaultTagName extends keyof JSX.IntrinsicElements, State extends Record<string, unknown>, RenderedElementType extends Element, Enabled extends boolean | undefined = undefined> =
	Omit<UseRenderParameters<State, RenderedElementType, Enabled>, "props" | "defaultTagName">
	& BaseUIComponentProps<DefaultTagName, State> & {
	/**
	 * The default tag name to use for the rendered element when `render` is not provided.
	 */
	defaultTagName: DefaultTagName
}