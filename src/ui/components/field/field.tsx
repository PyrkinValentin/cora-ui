"use client"

import type {
	FieldRootProps,
	FieldLabelProps,
	FieldDescriptionProps,
	FieldItemProps,
	FieldErrorProps,
	FieldValidityProps,
} from "./field.props"

import { toClassNames } from "../../utils"

import { Field } from "@base-ui/react/field"

export const FieldRoot = (props: FieldRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Field.Root
			{...restProps}
			className={toClassNames("field", className)}
		>
			{children}
		</Field.Root>
	)
}

export const FieldLabel = (props: FieldLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Field.Label
			{...restProps}
			className={toClassNames("field__label", className)}
		>
			{children}
		</Field.Label>
	)
}

export const FieldDescription = (props: FieldDescriptionProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Field.Description
			{...restProps}
			className={toClassNames("field__description", className)}
		>
			{children}
		</Field.Description>
	)
}

export const FieldItem = (props: FieldItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Field.Item
			{...restProps}
			className={toClassNames("field__item", className)}
		>
			{children}
		</Field.Item>
	)
}

export const FieldError = (props: FieldErrorProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Field.Error
			{...restProps}
			className={toClassNames("field__error", className)}
		>
			{children}
		</Field.Error>
	)
}

export const FieldValidity = (props: FieldValidityProps) => {
	return (
		<Field.Validity {...props}/>
	)
}

FieldRoot.displayName = "Field.Root"
FieldLabel.displayName = "Field.Label"
FieldDescription.displayName = "Field.Description"
FieldItem.displayName = "Field.Item"
FieldError.displayName = "Field.Error"
FieldValidity.displayName = "Field.Validity"