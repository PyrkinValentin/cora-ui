import type {
	ToastRootToastObject,
	ToastViewportProps as BaseToastViewportProps,
	ToastRootProps as BaseToastRootProps,
	ToastActionProps as BaseToastActionProps,
	ToastCloseProps as BaseToastCloseProps,
} from "@base-ui/react/toast"

import type { BaseUIComponentProps } from "@base-ui/react/internals/types"

import type { ToastData, ToastOptions } from "./toast.types"

export type {
	ToastManager,
	ToastManagerAddOptions,
	ToastManagerUpdateOptions,
	ToastManagerPromiseOptions,
	UseToastManagerReturn,
} from "./toast.types"

export type ToastIndicatorState = object

export type {
	ToastProviderProps,
	ToastProviderState,
	ToastRootState,
	ToastPortalProps,
	ToastPortalState,
	ToastPositionerProps,
	ToastPositionerState,
	ToastViewportState,
	ToastArrowProps,
	ToastArrowState,
	ToastContentProps,
	ToastContentState,
	ToastTitleProps,
	ToastTitleState,
	ToastDescriptionProps,
	ToastDescriptionState,
	ToastActionState,
	ToastCloseState,
	ToastManagerEvent,
} from "@base-ui/react/toast"

export type ToastViewportProps = BaseToastViewportProps & {
	/**
	 * The positioning of the component on the screen.
	 * @default "bottom-right"
	 */
	position?: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right"
}

export type ToastRootProps<Data extends ToastData = ToastData> = Omit<BaseToastRootProps, "toast"> & {
	toast: ToastRootToastObject<Data> & ToastOptions
}

export type ToastIndicatorProps = BaseUIComponentProps<"span", ToastIndicatorState>

export type ToastActionProps = BaseToastActionProps & {
	/**
	 * Whether to render the native action button with its default styles.
	 * @default true
	 */
	nativeAction?: boolean
}

export type ToastCloseProps = BaseToastCloseProps & {
	/**
	 * Whether to render the native close button with its default styles.
	 * @default true
	 */
	nativeClose?: boolean
}