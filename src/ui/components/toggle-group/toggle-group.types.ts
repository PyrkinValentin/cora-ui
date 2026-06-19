import type { ToggleGroupProps } from "./toggle-group.props"

export type ToggleGroupContextValue = Pick<ToggleGroupProps<string>, "iconOnly" | "variant" | "size" | "color">