"use client"

import type { FormProps } from "./form.props"

import { toClassNames } from "../../utils"

import { Form as BaseForm } from "@base-ui/react"

export const Form = <FormValues extends Record<string, unknown> = Record<string, unknown>>(props: FormProps<FormValues>) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<BaseForm
			{...restProps}
			className={toClassNames("form", className)}
		>
			{children}
		</BaseForm>
	)
}

Form.displayName = "Form"