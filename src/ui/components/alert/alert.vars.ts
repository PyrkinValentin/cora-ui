import type { AlertIndicators } from "./alert.types"

import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react"

export const ALERT_INDICATORS: AlertIndicators = {
	neutral: Info,
	info: Info,
	success: CircleCheck,
	warning: TriangleAlert,
	error: CircleAlert,
}