import type { ClassValue } from "./class-names"

import { classNames } from "./class-names"

type ApplyClassNameReturn<State> = string | ((state: State) => string | undefined)

export const toClassNames = <State>(
	classValue?: ClassValue,
	className?: string | ((state: State) => string | undefined),
): ApplyClassNameReturn<State> => {
	if (!className) return classNames(classValue)

	if (typeof className === "function") {
		return ((state: State) => classNames(classValue, className(state)))
	}

	return classNames(classValue, className)
}