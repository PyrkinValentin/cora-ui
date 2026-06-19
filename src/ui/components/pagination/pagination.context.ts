"use client"

import type { PaginationRootContextValue } from "./pagination.types"

import { createContext } from "react"

export const PaginationRootContext = createContext<PaginationRootContextValue>({
	total: 0,
	page: 1,
})