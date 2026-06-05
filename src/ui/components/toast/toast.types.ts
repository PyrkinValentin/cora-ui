import type { ReactNode } from "react"

import type {
	ToastObject,
	ToastManagerEvent,
	ToastManagerAddOptions as BaseToastManagerAddOptions,
	ToastManagerUpdateOptions as BaseToastManagerUpdateOptions,
} from "@base-ui/react/toast"

import type { ToastProviderProps, ToastRootProps } from "./toast.props"

type ToastSide = NonNullable<ToastProviderProps["side"]>
type ToastAlign = NonNullable<ToastProviderProps["align"]>
type ToastStatus = NonNullable<ToastOptions["status"]>

export type ToastContextValue = {
	side: ToastSide
	align: ToastAlign
}

export type ToastRootContextValue = {
	type?: string
	status: ToastStatus
	indicator?: ReactNode
}

export type UseToastSwipeDirectionOptions = {
	side: ToastSide
	align: ToastAlign
	swipeDirection?: ToastSwipeDirection
}

export type ToastSwipeDirection = NonNullable<ToastRootProps["swipeDirection"]>

export type ToastOptions = {
	/**
	 * An icon or element displayed next to the toast content to indicate its status.
	 */
	indicator?: ReactNode
	/**
	 * The visual status of the component.
	 * @default "neutral"
	 */
	status?: "neutral" | "info" | "success" | "warning" | "error"
}

export type ToastData = Record<string, unknown>
export type ToastManagerAddOptions<Data extends ToastData> = BaseToastManagerAddOptions<Data> & ToastOptions
export type ToastManagerUpdateOptions<Data extends ToastData> = BaseToastManagerUpdateOptions<Data> & ToastOptions

export type ToastManagerPromiseOptions<Value, Data extends ToastData> = {
	loading: string | ToastManagerUpdateOptions<Data>
	success: string | ToastManagerUpdateOptions<Data> | ((result: Value) => string | ToastManagerUpdateOptions<Data>)
	error: string | ToastManagerUpdateOptions<Data> | ((error: unknown) => string | ToastManagerUpdateOptions<Data>)
}

export type ToastManager<Data extends ToastData = ToastData> = {
	" subscribe": (listener: (data: ToastManagerEvent) => void) => () => void
	add: <T extends Data = Data>(options: ToastManagerAddOptions<T>) => string
	update: <T extends Data = Data>(id: string, options: ToastManagerUpdateOptions<T>) => void
	promise: <Value, T extends Data = Data>(
		promise: Promise<Value>,
		options: ToastManagerPromiseOptions<Value, T>
	) => Promise<Value>
	close: (id?: string) => void
}

export type UseToastManagerReturn<Data extends ToastData = ToastData> = Omit<ToastManager<Data>, " subscribe"> & {
	toasts: ToastObject<Data>[]
}