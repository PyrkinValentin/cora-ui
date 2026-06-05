"use client"

import type {
	ScrollAreaRootProps,
	ScrollAreaViewportProps,
	ScrollAreaContentProps,
	ScrollAreaScrollbarProps,
	ScrollAreaThumbProps,
	ScrollAreaCornerProps,
} from "./scroll-area.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { ScrollArea } from "@base-ui/react/scroll-area"

export const ScrollAreaRoot = (props: ScrollAreaRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Root
			{...restProps}
			className={toClassNames("scroll-area", className)}
		>
			{children}
		</ScrollArea.Root>
	)
}

export const ScrollAreaViewport = (props: ScrollAreaViewportProps) => {
	const {
		scrollFade,
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Viewport
			{...restProps}
			{...toDataAttrs({ scrollFade })}
			className={toClassNames("scroll-area__viewport", className)}
		>
			{children}
		</ScrollArea.Viewport>
	)
}

export const ScrollAreaContent = (props: ScrollAreaContentProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Content
			{...restProps}
			className={toClassNames("scroll-area__content", className)}
		>
			{children}
		</ScrollArea.Content>
	)
}

export const ScrollAreaScrollbar = (props: ScrollAreaScrollbarProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Scrollbar
			{...restProps}
			className={toClassNames("scroll-area__scrollbar", className)}
		>
			{children}
		</ScrollArea.Scrollbar>
	)
}

export const ScrollAreaThumb = (props: ScrollAreaThumbProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Thumb
			{...restProps}
			className={toClassNames("scroll-area__thumb", className)}
		>
			{children}
		</ScrollArea.Thumb>
	)
}

export const ScrollAreaCorner = (props: ScrollAreaCornerProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<ScrollArea.Corner {...restProps}>
			{children}
		</ScrollArea.Corner>
	)
}

ScrollAreaRoot.displayName = "ScrollArea.Root"
ScrollAreaViewport.displayName = "ScrollArea.Viewport"
ScrollAreaContent.displayName = "ScrollArea.Content"
ScrollAreaScrollbar.displayName = "ScrollArea.Scrollbar"
ScrollAreaThumb.displayName = "ScrollArea.Thumb"
ScrollAreaCorner.displayName = "ScrollArea.Corner"