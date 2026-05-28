"use client"

import type { MouseEvent } from "react"
import type { BaseUIEvent } from "@base-ui/react"
import type { InputGroupProps } from "./input-group.props"
import type { InputGroupContextValue, InputGroupProviderProps } from "./input-group.types"

import { useMemo, useRef } from "react"

import { applyCn } from "../../utils"
import { focusInputSlot } from "./input-group.utils"

import { Render } from "../render"
import { InputGroupContext } from "./input-group.context"

const InputGroupProvider = (props: InputGroupProviderProps) => {
	const {
		group,
		inputRef,
		children,
	} = props

	const contextValue = useMemo<InputGroupContextValue>(() => ({
		group,
		inputRef,
	}), [group, inputRef])

	return (
		<InputGroupContext value={contextValue}>
			{children}
		</InputGroupContext>
	)
}

export const InputGroup = (props: InputGroupProps) => {
	const {
		className,
		onMouseDown,
		children,
		...restProps
	} = props

	const inputRef = useRef<HTMLInputElement>(null)

	const handleMouseDown = (ev: BaseUIEvent<MouseEvent<HTMLDivElement>>) => {
		onMouseDown?.(ev)

		const input = inputRef.current

		if (
			input &&
			!ev.defaultPrevented &&
			!ev.baseUIHandlerPrevented
		) {
			focusInputSlot(ev, input)
		}
	}

	return (
		<InputGroupProvider
			group
			inputRef={inputRef}
		>
			<Render
				{...restProps}
				defaultTagName="div"
				role="group"
				data-slot="input-group"
				className={applyCn("input-group", className)}
				onMouseDown={handleMouseDown}
			>
				{children}
			</Render>
		</InputGroupProvider>
	)
}

InputGroupProvider.displayName = "InputGroup.Provider"
InputGroup.displayName = "InputGroup"