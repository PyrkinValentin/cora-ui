"use client"

import { use } from "react"

import { BadgeContext } from "./badge.context"

export const useBadgeContext = () => use(BadgeContext)