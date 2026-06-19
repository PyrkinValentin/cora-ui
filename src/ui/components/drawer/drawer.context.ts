"use client"

import type { DrawerViewportContextValue } from "./drawer.types"

import { createContext } from "react"

export const DrawerViewportContext = createContext<DrawerViewportContextValue>({})