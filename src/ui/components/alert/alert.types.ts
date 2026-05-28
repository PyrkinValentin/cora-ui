import type { ComponentType, ReactNode } from "react"
import type { LucideProps } from "lucide-react"
import type { AlertRootProps } from "./alert.props"

export type AlertStatus = NonNullable<AlertRootProps["status"]>

export type AlertContextValue = {
	status: AlertStatus
}

export type AlertProviderProps = AlertContextValue & {
	children: ReactNode
}

export type AlertIndicators = Record<AlertStatus, ComponentType<LucideProps>>