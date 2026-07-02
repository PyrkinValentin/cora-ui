"use client"

import { useCallback, useEffect, useRef } from "react"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyFunction = (...args: never[]) => any

/**
 * A custom hook that creates a stable reference for a callback function, preventing unnecessary re-renders while always executing its freshest version.
 */
export function useStableCallback<Callback extends AnyFunction>(callback: Callback): Callback

/**
 * A custom hook that creates a stable reference for a callback function, preventing unnecessary re-renders while always executing its freshest version.
 */
export function useStableCallback<Callback extends AnyFunction>(callback: Callback | undefined): Callback | undefined

/**
 * A custom hook that creates a stable reference for a callback function, preventing unnecessary re-renders while always executing its freshest version.
 */
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