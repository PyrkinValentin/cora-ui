import type { JSX } from "react"
import type { UseRenderParameters } from "../../hooks/use-render"
import type { UIComponentProps } from "../../types"

export type RenderProps<DefaultTagName extends keyof JSX.IntrinsicElements, State extends Record<string, unknown>, RenderedElementType extends Element, Enabled extends boolean | undefined = undefined> =
	Omit<UseRenderParameters<State, RenderedElementType, Enabled>, "props" | "defaultTagName">
	& UIComponentProps<DefaultTagName, State> & {
	/**
	 * The default tag name to use for the rendered element when `render` is not provided.
	 */
	defaultTagName: DefaultTagName
}