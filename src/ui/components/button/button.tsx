"use client"

import type { ButtonProps } from "./button.props"

import { useButtonGroupContext } from "../button-group/button-group.hooks"

import { applyCn, toDataAttrs } from "../../utils"

import { Button as BaseUIButton } from "@base-ui/react/button"

export const Button = (props: ButtonProps) => {
	const { group, ...contextValue } = useButtonGroupContext()

	const {
		disabled = contextValue.disabled,
		iconOnly = contextValue.iconOnly,
		fullWidth = contextValue.fullWidth,
		variant = contextValue.variant ?? "primary",
		size = contextValue.size ?? "md",
		color = contextValue.color ?? "info",
		className,
		children,
		...restProps
	} = props

	return (
		<BaseUIButton
			{...restProps}
			{...toDataAttrs({ group, iconOnly, fullWidth, variant, size, color })}
			disabled={disabled}
			data-slot="button"
			className={applyCn("button", className)}
		>
			{children}
		</BaseUIButton>
	)
}

Button.displayName = "Button"