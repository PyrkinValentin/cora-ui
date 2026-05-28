"use client"

import type {
	ToastData,
	ToastSwipeDirection,
	UseToastManagerReturn,
	UseToastSwipeDirectionOptions,
} from "./toast.types"

import { use, useMemo } from "react"
import { useMediaQuery } from "../../hooks"

import { Toast } from "@base-ui/react/toast"
import { ToastContext, ToastRootContext } from "./toast.context"

export const useToastContext = () => use(ToastContext)
export const useToastRootContext = () => use(ToastRootContext)

/**
 * Returns the array of toasts and methods to manage them.
 */
export const useToastManager = <Data extends ToastData = ToastData>(): UseToastManagerReturn<Data> => {
	return Toast.useToastManager<Data>()
}

export const useToastSwipeDirection = (options: UseToastSwipeDirectionOptions): ToastSwipeDirection => {
	const {
		side,
		align,
	} = options

	const mobile = useMediaQuery((query) => query.down("sm"))

	return useMemo<ToastSwipeDirection>(() => {
		const vertical: ToastSwipeDirection = side === "top"
			? "up"
			: "down"

		if (mobile) return [vertical, "left", "right"]
		if (align === "start") return [vertical, "left"]
		if (align === "end") return [vertical, "right"]

		return vertical
	}, [side, align, mobile])
}

