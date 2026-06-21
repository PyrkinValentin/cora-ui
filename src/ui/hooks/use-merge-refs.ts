"use client"

import type { Ref, RefCallback } from "react"

import { useCallback } from "react"

/**
 * A custom hook that merges multiple React refs (callback refs and object refs) into a single callback ref, fully supporting React 19 cleanup functions.
 */
export const useMergeRefs = <R>(...refs: (Ref<R> | undefined)[]): RefCallback<R> => {
	return useCallback((instance: R | null) => {
		const cleanups: (() => void)[] = []

		for (let i = 0; i < refs.length; i++) {
			const ref = refs[i]

			if (
				ref === null ||
				ref === undefined
			) continue

			switch (typeof ref) {
				case "function": {
					const cleanup = ref(instance)

					if (typeof cleanup === "function") {
						cleanups.push(cleanup)
					}

					break
				}
				case "object": {
					if ("current" in ref) {
						// eslint-disable-next-line react-hooks/immutability
						ref.current = instance
					}

					break
				}
			}
		}

		if (cleanups.length > 0) {
			return () => {
				for (let i = 0; i < cleanups.length; i++) {
					cleanups[i]()
				}
			}
		}
		// eslint-disable-next-line react-hooks/use-memo,react-hooks/exhaustive-deps
	}, refs)
}