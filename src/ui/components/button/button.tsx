"use client"

import type { ButtonProps } from "./button.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Button as BaseButton } from "@base-ui/react/button"

export const Button = (props: ButtonProps) => {
	const {
		iconOnly,
		variant = "primary",
		size = "md",
		className,
		children,
		...restProps
	} = props

	return (
		<BaseButton
			{...restProps}
			{...toDataAttrs({ iconOnly, variant, size })}
			className={toClassNames("button", className)}
		>
			{children}
		</BaseButton>
	)
}

Button.displayName = "Button"