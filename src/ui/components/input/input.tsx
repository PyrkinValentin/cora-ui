"use client"

import type { InputProps } from "./input.props"

import { useMergeRefs } from "../../hooks"
import { useInputGroupContext } from "../input-group/input-group.hooks"

import { applyCn, toDataAttrs } from "../../utils"

import { Input as BaseUIInput } from "@base-ui/react/input"

export const Input = (props: InputProps) => {
	const { group, ...contextValue } = useInputGroupContext()

	const {
		ref,
		className,
		...restProps
	} = props

	const mergeRefs = useMergeRefs(contextValue.inputRef, ref)

	return (
		<BaseUIInput
			{...restProps}
			{...toDataAttrs({ group })}
			ref={mergeRefs}
			data-slot="input"
			className={applyCn("input", className)}
		/>
	)
}

Input.displayName = "Input"