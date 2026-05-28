import type { ReactNode, RefObject } from "react"

export type InputGroupContextValue = {
	group?: boolean
	inputRef?: RefObject<HTMLInputElement | null>
}

export type InputGroupProviderProps = InputGroupContextValue & {
	children: ReactNode
}