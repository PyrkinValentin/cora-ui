"use client"

import type { InputProps } from "./input.props"

import { toClassNames } from "../../utils"

import { Input as BaseInput } from "@base-ui/react/input"

export const Input = (props: InputProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<BaseInput
			{...restProps}
			className={toClassNames("input", className)}
		/>
	)
}

Input.displayName = "Input"