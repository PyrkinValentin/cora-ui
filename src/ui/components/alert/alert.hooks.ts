"use client"

import { use } from "react"

import { AlertContext } from "./alert.context"

export const useAlertContext = () => use(AlertContext)