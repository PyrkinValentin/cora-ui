import type { ToastIndicators } from "./toast.types"

import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react"

export const TOAST_INDICATORS: ToastIndicators = {
	neutral: Info,
	info: Info,
	success: CircleCheck,
	warning: TriangleAlert,
	error: CircleAlert,
}