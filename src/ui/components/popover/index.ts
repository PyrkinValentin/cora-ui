import { PopoverHandle, popoverCreateHandle } from "./popover.utils"

import {
	PopoverRoot,
	PopoverTrigger,
	PopoverPortal,
	PopoverBackdrop,
	PopoverPositioner,
	PopoverPopup,
	PopoverArrow,
	PopoverViewport,
	PopoverTitle,
	PopoverDescription,
	PopoverClose,
} from "./popover"

export const Popover = {
	Root: PopoverRoot,
	Trigger: PopoverTrigger,
	Portal: PopoverPortal,
	Backdrop: PopoverBackdrop,
	Positioner: PopoverPositioner,
	Popup: PopoverPopup,
	Arrow: PopoverArrow,
	Viewport: PopoverViewport,
	Title: PopoverTitle,
	Description: PopoverDescription,
	Close: PopoverClose,
	Handle: PopoverHandle,
	createHandle: popoverCreateHandle,
}