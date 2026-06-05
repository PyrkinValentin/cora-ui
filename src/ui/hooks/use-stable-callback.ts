"use client"

import { useCallback, useEffect, useRef } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: never[]) => any

// 1. Описываем перегрузки для точности типов на выходе
export function useStableCallback<Callback extends AnyFunction>(callback: Callback): Callback
export function useStableCallback<Callback extends AnyFunction>(callback: Callback | undefined): Callback | undefined

export function useStableCallback<Callback extends AnyFunction>(callback: Callback | undefined): Callback | undefined {
	const callbackRef = useRef(callback)

	useEffect(() => {
		callbackRef.current = callback
	})

	const stableCallback = useCallback((...args: Parameters<Callback>): ReturnType<Callback> | undefined => {
		return callbackRef.current?.(...args)
	}, []) as Callback

	return callback
		? stableCallback
		: undefined
}