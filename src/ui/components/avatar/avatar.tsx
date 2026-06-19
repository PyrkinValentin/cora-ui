"use client"

import type { AvatarRootProps, AvatarImageProps, AvatarFallbackProps } from "./avatar.props"

import { useAvatarGroupContext } from "../avatar-group/avatar-group.hooks"

import { toClassNames, toDataAttrs } from "../../utils"

import { Avatar } from "@base-ui/react/avatar"
import { UserRound } from "lucide-react"

export const AvatarRoot = (props: AvatarRootProps) => {
	const contextValue = useAvatarGroupContext()

	const {
		size = contextValue.size ?? "md",
		color = contextValue.color ?? "neutral",
		className,
		children,
		...restProps
	} = props

	return (
		<Avatar.Root
			{...restProps}
			{...toDataAttrs({ size, color })}
			className={toClassNames("avatar", className)}
		>
			{children}
		</Avatar.Root>
	)
}

export const AvatarImage = (props: AvatarImageProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Avatar.Image
			{...restProps}
			className={toClassNames("avatar__image", className)}
		/>
	)
}

export const AvatarFallback = (props: AvatarFallbackProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Avatar.Fallback
			{...restProps}
			className={toClassNames("avatar__fallback", className)}
		>
			{children ?? <UserRound/>}
		</Avatar.Fallback>
	)
}