"use client"

import type { PaginationContextValue } from "./pagination.types"

import { createContext } from "react"

export const PaginationContext = createContext<PaginationContextValue>({
	size: "md",
	total: 0,
	page: 1,
})