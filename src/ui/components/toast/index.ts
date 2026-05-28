import {
	ToastProvider,
	ToastPortal,
	ToastViewport,
	ToastPositioner,
	ToastRoot,
	ToastArrow,
	ToastContent,
	ToastIndicator,
	ToastSummary,
	ToastTitle,
	ToastDescription,
	ToastAction,
	ToastClose
} from "./toast"

import { useToastManager } from "./toast.hooks"
import { toastDefaultManager, toastCreateManager } from "./toast.utils"

export const Toast = {
	Provider: ToastProvider,
	Portal: ToastPortal,
	Viewport: ToastViewport,
	Positioner: ToastPositioner,
	Root: ToastRoot,
	Arrow: ToastArrow,
	Content: ToastContent,
	Indicator: ToastIndicator,
	Summary: ToastSummary,
	Title: ToastTitle,
	Description: ToastDescription,
	Action: ToastAction,
	Close: ToastClose,
	useManager: useToastManager,
	createManager: toastCreateManager,
	...toastDefaultManager,
}