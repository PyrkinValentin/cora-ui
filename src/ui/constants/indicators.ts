import type { ComponentType } from "react"
import type { LucideProps } from "lucide-react"

import { CircleAlert, CircleCheck, Info, TriangleAlert } from "lucide-react"

type Status = "neutral" | "info" | "success" | "warning" | "error"
type StatusIndicators = Record<Status, ComponentType<LucideProps>>

export const STATUS_INDICATORS: StatusIndicators = {
	neutral: Info,
	info: Info,
	success: CircleCheck,
	warning: TriangleAlert,
	error: CircleAlert,
}