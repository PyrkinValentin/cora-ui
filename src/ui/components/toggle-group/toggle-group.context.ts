"use client"

import type { ToggleGroupContextValue } from "./toggle-group.types"

import { createContext } from "react"

export const ToggleGroupContext = createContext<ToggleGroupContextValue>({})