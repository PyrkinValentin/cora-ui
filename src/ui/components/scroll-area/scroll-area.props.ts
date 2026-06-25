import type { ScrollAreaViewportProps as BaseScrollAreaViewportProps } from "@base-ui/react/scroll-area"

export type {
	ScrollAreaRootProps,
	ScrollAreaRootState,
	ScrollAreaContentProps,
	ScrollAreaViewportState,
	ScrollAreaContentState,
	ScrollAreaScrollbarProps,
	ScrollAreaScrollbarState,
	ScrollAreaThumbProps,
	ScrollAreaThumbState,
	ScrollAreaCornerProps,
	ScrollAreaCornerState,
	Size,
	Coords,
	OverflowEdges,
	HiddenState,
} from "@base-ui/react/scroll-area"

export type ScrollAreaViewportProps = BaseScrollAreaViewportProps & {
	/**
	 * Enables a gradient fade effect at the scrollable edges.
	 * @default false
	 */
	scrollFade?: boolean
}