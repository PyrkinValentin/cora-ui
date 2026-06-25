import type { AvatarRootProps as BaseAvatarRootProps } from "@base-ui/react/avatar"

export type {
	AvatarRootState,
	AvatarImageProps,
	AvatarImageState,
	AvatarFallbackProps,
	AvatarFallbackState,
	ImageLoadingStatus,
} from "@base-ui/react/avatar"

export type AvatarRootProps = BaseAvatarRootProps & {
	/**
	 * The size of the component.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg"
	/**
	 * The color theme of the component.
	 * @default "neutral"
	 */
	color?: "neutral" | "info" | "success" | "warning" | "error"
}

export type { GetAvatarInitialsOptions } from "./avatar.types"