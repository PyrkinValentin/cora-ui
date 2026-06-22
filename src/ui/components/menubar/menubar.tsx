"use client"

import type { MenubarProps } from "./menubar.props"

import { toClassNames } from "../../utils"

import { Menubar as BaseMenubar } from "@base-ui/react/menubar"

export const Menubar = (props: MenubarProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<BaseMenubar
			{...restProps}
			className={toClassNames("menubar", className)}
		>
			{children}
		</BaseMenubar>
	)
}