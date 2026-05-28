import {
	TooltipProvider,
	TooltipRoot,
	TooltipTrigger,
	TooltipPortal,
	TooltipPositioner,
	TooltipPopup,
	TooltipArrow,
} from "./tooltip"

import { tooltipCreateHandle } from "./tooltip.utils"

export const Tooltip = {
	Provider: TooltipProvider,
	Root: TooltipRoot,
	Trigger: TooltipTrigger,
	Portal: TooltipPortal,
	Positioner: TooltipPositioner,
	Popup: TooltipPopup,
	Arrow: TooltipArrow,
	createHandle: tooltipCreateHandle,
}