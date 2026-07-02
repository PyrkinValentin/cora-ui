"use client"

import type { AvatarGroupContextValue } from "./avatar-group.types"

import { createContext } from "react"

export const AvatarGroupContext = createContext<AvatarGroupContextValue>({})
