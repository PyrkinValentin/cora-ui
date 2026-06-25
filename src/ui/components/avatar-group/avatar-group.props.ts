import type { BaseUIComponentProps } from "@base-ui/react/internals/types"
import type { AvatarRootProps } from "../avatar/avatar.props"

export type AvatarGroupState = object

export type AvatarGroupProps =
	BaseUIComponentProps<"div", AvatarGroupState>
	& Pick<AvatarRootProps, "size" | "color">
	& {
	/**
	 * The orientation of the component.
	 * @default "horizontal"
	 */
	orientation?: "horizontal" | "vertical"
}