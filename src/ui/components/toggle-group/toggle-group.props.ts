import type { ToggleGroupProps as BaseToggleGroupProps } from "@base-ui/react/toggle-group"
import type { ToggleProps } from "../toggle/toggle.props"

export type ToggleGroupProps<Value extends string> =
	BaseToggleGroupProps<Value>
	& Pick<ToggleProps<Value>, "iconOnly" | "variant" | "size" | "color">