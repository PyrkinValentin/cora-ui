"use client"

import type { JSX } from "react"
import type { RenderProps } from "./render.props"

import { useRender } from "../../hooks"

export const Render = <DefaultTagName extends keyof JSX.IntrinsicElements, State extends Record<string, unknown>, RenderedElementType extends Element, Enabled extends boolean | undefined = undefined>(props: RenderProps<DefaultTagName, State, RenderedElementType, Enabled>) => {
	const {
		enabled,
		defaultTagName,
		ref,
		render,
		state = {} as State,
		stateAttributesMapping,
		className,
		style,
		...restProps
	} = props

	return useRender<State, RenderedElementType, Enabled>({
		enabled,
		defaultTagName,
		ref,
		render,
		state,
		stateAttributesMapping,
		props: {
			...restProps,
			className: typeof className === "function"
				? className(state)
				: className,
			style: typeof style === "function"
				? style(state)
				: style
		},
	})
}


Render.displayName = "Render"