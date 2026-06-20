"use client"

import type { InputProps } from "@base-ui/react/input"
import type { TextareaProps } from "./textarea.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Input } from "@base-ui/react/input"

export const Textarea = (props: TextareaProps) => {
	const {
		autoResize = true,
		render,
		className,
		...restProps
	} = props

	return (
		<Input
			{...restProps as InputProps}
			{...toDataAttrs({ autoResize })}
			className={toClassNames("textarea", className)}
			render={render ?? <textarea/>}
		/>
	)
}