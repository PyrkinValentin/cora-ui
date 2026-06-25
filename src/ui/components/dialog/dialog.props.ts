import type {
	DialogViewportProps as BaseDialogViewportProps,
	DialogPopupProps as BaseDialogPopupProps,
	DialogCloseProps as BaseDialogCloseProps,
} from "@base-ui/react/dialog"

import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

export type DialogActionsState = object

export type {
	DialogRootProps,
	DialogRootState,
	DialogRootActions,
	DialogRootChangeEventReason,
	DialogRootChangeEventDetails,
	DialogTriggerProps,
	DialogTriggerState,
	DialogPortalProps,
	DialogPortalState,
	DialogBackdropProps,
	DialogBackdropState,
	DialogViewportState,
	DialogPopupState,
	DialogTitleProps,
	DialogTitleState,
	DialogDescriptionProps,
	DialogDescriptionState,
	DialogCloseState,
} from "@base-ui/react/dialog"

export type DialogViewportProps = BaseDialogViewportProps & {
	/**
	 * The positioning of the component on the screen.
	 * @default "center"
	 */
	position?: "top" | "center" | "bottom"
}

export type DialogPopupProps = BaseDialogPopupProps & {
	/**
	 * The size of the component.
	 * @default "md"
	 */
	size?: "sm" | "md" | "lg" | "full"
}

export type DialogActionsProps = BaseUIComponentProps<"div", DialogActionsState>

export type DialogCloseProps = BaseDialogCloseProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default false
	 */
	nativeClose?: boolean
}