import type { ReactNode } from "react"
import type { BadgeRootProps } from "./badge.props"

export type BadgeRootState = {
	invisible: boolean
}

type BadgeSide = NonNullable<BadgeRootProps["side"]>
type BadgeAlign = NonNullable<BadgeRootProps["align"]>
type BadgeSize = NonNullable<BadgeRootProps["size"]>
type BadgeStatus = NonNullable<BadgeRootProps["status"]>

export type BadgeContextValue = {
	invisible: boolean
	side: BadgeSide
	align: BadgeAlign
	size: BadgeSize
	status: BadgeStatus
}

export type BadgeProviderProps = BadgeContextValue & {
	children: ReactNode
}