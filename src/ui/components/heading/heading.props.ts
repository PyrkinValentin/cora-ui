import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

type HeadingState = object

export type HeadingProps = BaseUIComponentProps<"h1", HeadingState> & {
	/**
	 * The semantic level and visual size of the heading.
	 * @default "1"
	 */
	level?: "1" | "2" | "3"
}