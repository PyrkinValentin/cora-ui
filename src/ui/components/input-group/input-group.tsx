"use client"

import type { MouseEvent } from "react"
import type { BaseUIEvent } from "@base-ui/react"
import type { InputGroupProps } from "./input-group.props"

import { focusSlot, toClassNames } from "../../utils"

import { Render } from "../render"

export const InputGroup = (props: InputGroupProps) => {
	const {
		className,
		onMouseDown,
		children,
		...restProps
	} = props

	const handleMouseDown = (ev: BaseUIEvent<MouseEvent<HTMLDivElement>>) => {
		onMouseDown?.(ev)

		if (
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			focusSlot(ev)
		}
	}

	return (
		<Render
			{...restProps}
			defaultTagName="div"
			role="group"
			className={toClassNames("input-group", className)}
			onMouseDown={handleMouseDown}
		>
			{children}
		</Render>
	)
}