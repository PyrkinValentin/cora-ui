"use client"

import type {
	FieldRootProps,
	FieldLabelProps,
	FieldControlProps,
	FieldDescriptionProps,
	FieldItemProps,
	FieldErrorProps,
	FieldValidityProps,
} from "./field.props"

import { toClassNames } from "../../utils"

import { Field } from "@base-ui/react/field"

/**
 * Groups all parts of the field.
 * Renders a `<div>` element.
 */
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

/**
 * An accessible label that is automatically associated with the field control.
 * Renders a `<label>` element.
 */
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

/**
 * The form control to label and validate.
 * Renders an `<input>` element.
 */
export const FieldControl = (props: FieldControlProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Field.Control
			{...restProps}
			className={toClassNames("field__control", className)}
		/>
	)
}

/**
 * A paragraph with additional information about the field.
 * Renders a `<p>` element.
 */
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

/**
 * Groups individual items in a checkbox group or radio group with a label and description.
 * Renders a `<div>` element.
 */
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

/**
 * An error message displayed if the field control fails validation.
 * Renders a `<div>` element.
 */
export const FieldError = (props: FieldErrorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Field.Error
			{...restProps}
			className={toClassNames("field__error", className)}
		/>
	)
}

/**
 * Used to display a custom message based on the field's validity.
 * Requires `children` to be a function that accepts field validity state as an argument.
 */
export const FieldValidity = (props: FieldValidityProps) => {
	return (
		<Field.Validity {...props}/>
	)
}