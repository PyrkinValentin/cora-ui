import {
	PopoverRoot,
	PopoverTrigger,
	PopoverPortal,
	PopoverBackdrop,
	PopoverPositioner,
	PopoverPopup,
	PopoverArrow,
	PopoverTitle,
	PopoverDescription,
	PopoverClose,
} from "./popover"

import { popoverCreateHandle } from "./popover.utils"

export const Popover = {
	Root: PopoverRoot,
	Trigger: PopoverTrigger,
	Portal: PopoverPortal,
	Backdrop: PopoverBackdrop,
	Positioner: PopoverPositioner,
	Popup: PopoverPopup,
	Arrow: PopoverArrow,
	Title: PopoverTitle,
	Description: PopoverDescription,
	Close: PopoverClose,
	createHandle: popoverCreateHandle,
}