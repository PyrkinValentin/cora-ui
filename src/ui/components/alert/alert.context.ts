"use client"

import type { AlertContextValue } from "./alert.types"

import { createContext } from "react"

export const AlertContext = createContext<AlertContextValue>({
	status: "neutral",
})