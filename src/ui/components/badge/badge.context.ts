"use client"

import type { BadgeContextValue } from "./badge.types"

import { createContext } from "react"

export const BadgeContext = createContext<BadgeContextValue>({
	invisible: false,
	side: "top",
	align: "end",
	size: "md",
	status: "neutral",
})