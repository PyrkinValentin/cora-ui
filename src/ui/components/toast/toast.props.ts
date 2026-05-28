import type {
	ToastRootToastObject,
	ToastProviderProps as BaseToastProviderProps,
	ToastRootProps as BaseToastRootProps,
} from "@base-ui/react/toast"

import type { BaseUIComponentProps } from "@base-ui/react/internals/types"
import type { ToastData, ToastOptions } from "./toast.types"

export type {
	ToastPortalProps,
	ToastViewportProps,
	ToastPositionerProps,
	ToastArrowProps,
	ToastContentProps,
	ToastTitleProps,
	ToastDescriptionProps,
	ToastActionProps,
	ToastCloseProps,
} from "@base-ui/react/toast"

export type ToastProviderProps = BaseToastProviderProps & {
	/**
	 * The side of the anchor the component is placed on.
	 * @default "bottom"
	 */
	side?: "top" | "bottom"
	/**
	 * The alignment of the component relative to the anchor.
	 * @default "end"
	 */
	align?: "start" | "center" | "end"
}

export type ToastRootProps<Data extends ToastData> = Omit<BaseToastRootProps, "toast"> & {
	toast: ToastRootToastObject<Data> & ToastOptions
}

export type ToastIndicatorProps = BaseUIComponentProps<"span", unknown>
export type ToastSummaryProps = BaseUIComponentProps<"div", unknown>