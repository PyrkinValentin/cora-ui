import type {
	ToastRootToastObject,
	ToastProviderProps as BaseToastProviderProps,
	ToastRootProps as BaseToastRootProps,
	ToastActionProps as BaseToastActionProps,
	ToastCloseProps as BaseToastCloseProps,
} from "@base-ui/react/toast"

import type { UIComponentProps } from "../../types"
import type { ToastData, ToastOptions } from "./toast.types"

export type {
	ToastProviderState,
	ToastPortalProps,
	ToastPortalState,
	ToastViewportProps,
	ToastViewportState,
	ToastPositionerProps,
	ToastPositionerState,
	ToastRootState,
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
} from "@base-ui/react/toast"

export type ToastProviderProps = BaseToastProviderProps & {
	/**
	 * The side of the screen the component is placed on.
	 * @default "bottom"
	 */
	side?: "top" | "bottom"
	/**
	 * The alignment of the component relative to the screen.
	 * @default "end"
	 */
	align?: "start" | "center" | "end"
}

export type ToastRootProps<Data extends ToastData = ToastData> = Omit<BaseToastRootProps, "toast"> & {
	toast: ToastRootToastObject<Data> & ToastOptions
}

export type ToastIndicatorState = object
export type ToastIndicatorProps = UIComponentProps<"span", ToastIndicatorState>

export type ToastGroupState = object
export type ToastGroupProps = UIComponentProps<"div", ToastGroupState>

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