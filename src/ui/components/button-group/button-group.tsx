"use client"

import type { ButtonGroupProps } from "./button-group.props"
import type { ButtonGroupContextValue, ButtonGroupProviderProps } from "./button-group.types"

import { useMemo } from "react"

import { applyCn, toDataAttrs } from "../../utils"

import { Render } from "../render"
import { ButtonGroupContext } from "./button-group.context"

const ButtonGroupProvider = (props: ButtonGroupProviderProps) => {
	const {
		group,
		disabled,
		iconOnly,
		fullWidth,
		variant,
		size,
		color,
		children,
	} = props

	const contextValue = useMemo<ButtonGroupContextValue>(() => ({
		group,
		disabled,
		iconOnly,
		fullWidth,
		variant,
		size,
		color,
	}), [group, disabled, iconOnly, fullWidth, variant, size, color])

	return (
		<ButtonGroupContext value={contextValue}>
			{children}
		</ButtonGroupContext>
	)
}

export const ButtonGroup = (props: ButtonGroupProps) => {
	const {
		disabled = false,
		iconOnly,
		fullWidth,
		variant = "primary",
		size = "md",
		color = "info",
		className,
		children,
		...restProps
	} = props

	return (
		<ButtonGroupProvider
			group
			disabled={disabled}
			iconOnly={iconOnly}
			fullWidth={fullWidth}
			variant={variant}
			size={size}
			color={color}
		>
			<Render
				{...restProps}
				{...toDataAttrs({ iconOnly, fullWidth, variant, size, color })}
				defaultTagName="div"
				state={{ disabled }}
				role="group"
				data-slot="button-group"
				className={applyCn("button-group", className)}
			>
				{children}
			</Render>
		</ButtonGroupProvider>
	)
}

ButtonGroupProvider.displayName = "ButtonGroup.Provider"
ButtonGroup.displayName = "ButtonGroup"