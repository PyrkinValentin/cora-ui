"use client"

import type { ToastContextValue, ToastRootContextValue } from "./toast.types"

import { createContext } from "react"

export const ToastContext = createContext<ToastContextValue>({
	side: "bottom",
	align: "end",
})

export const ToastRootContext = createContext<ToastRootContextValue>({
	duplicate: false,
	anchor: false,
	status: "neutral",
})