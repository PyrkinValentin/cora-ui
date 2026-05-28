import type { ToastData, ToastManager } from "./toast.types"

import { Toast } from "@base-ui/react/toast"

/**
 * Creates a new toast manager.
 */
export const toastCreateManager = <Data extends ToastData = ToastData>(): ToastManager<Data> => {
	return Toast.createToastManager<Data>()
}

export const toastDefaultManager = toastCreateManager()