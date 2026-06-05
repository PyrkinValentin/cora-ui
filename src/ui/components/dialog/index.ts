import { DialogHandle, dialogCreateHandle } from "./dialog.utils"

import {
	DialogRoot,
	DialogTrigger,
	DialogPortal,
	DialogBackdrop,
	DialogViewport,
	DialogPopup,
	DialogIndicator,
	DialogTitle,
	DialogDescription,
	DialogActions,
	DialogClose
} from "./dialog"

export const Dialog = {
	Root: DialogRoot,
	Trigger: DialogTrigger,
	Portal: DialogPortal,
	Backdrop: DialogBackdrop,
	Viewport: DialogViewport,
	Popup: DialogPopup,
	Indicator: DialogIndicator,
	Title: DialogTitle,
	Description: DialogDescription,
	Actions: DialogActions,
	Close: DialogClose,
	Handle: DialogHandle,
	createHandle: dialogCreateHandle,
}