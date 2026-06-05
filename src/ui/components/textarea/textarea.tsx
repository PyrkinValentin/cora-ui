"use client"

import type { TextareaProps } from "./textarea.props"

import { toClassNames } from "../../utils"

import { Input as BaseTextarea } from "@base-ui/react/input"

export const Textarea = (props: TextareaProps) => {
	const {
		className,
		render,
		...restProps
	} = props

	return (
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-expect-error
		<BaseTextarea
			{...restProps}
			render={render ?? <textarea/>}
			className={toClassNames("textarea", className)}
		/>
	)
}

Textarea.displayName = "Textarea"