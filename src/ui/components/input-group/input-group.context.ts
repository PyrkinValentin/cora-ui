"use client"

import type { InputGroupContextValue } from "./input-group.types"

import { createContext } from "react"

export const InputGroupContext = createContext<InputGroupContextValue>({})