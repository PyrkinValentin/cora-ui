import { useToastManager } from "./toast.hooks"

import { toastCreateManager } from "./toast.utils"

import {
	ToastProvider,
	ToastPortal,
	ToastViewport,
	ToastPositioner,
	ToastRoot,
	ToastArrow,
	ToastContent,
	ToastIndicator,
	ToastGroup,
	ToastTitle,
	ToastDescription,
	ToastAction,
	ToastClose,
} from "./toast"

export const Toast = {
	Provider: ToastProvider,
	Portal: ToastPortal,
	Viewport: ToastViewport,
	Positioner: ToastPositioner,
	Root: ToastRoot,
	Arrow: ToastArrow,
	Content: ToastContent,
	Indicator: ToastIndicator,
	Group: ToastGroup,
	Title: ToastTitle,
	Description: ToastDescription,
	Action: ToastAction,
	Close: ToastClose,
	useManager: useToastManager,
	createManager: toastCreateManager,
}