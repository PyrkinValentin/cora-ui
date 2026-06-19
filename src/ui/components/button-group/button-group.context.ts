"use client"

import type { ButtonGroupContextValue } from "./button-group.types"

import { createContext } from "react"

export const ButtonGroupContext = createContext<ButtonGroupContextValue>({})