"use client"

import type {
	ProgressRootProps,
	ProgressLabelProps,
	ProgressValueProps,
	ProgressTrackProps,
	ProgressIndicatorProps,
} from "./progress.props"

import { toClassNames } from "../../utils"

import { Progress } from "@base-ui/react/progress"

export const ProgressRoot = (props: ProgressRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Progress.Root
			{...restProps}
			className={toClassNames("progress", className)}
		>
			{children}
		</Progress.Root>
	)
}

export const ProgressLabel = (props: ProgressLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Progress.Label
			{...restProps}
			className={toClassNames("progress__label", className)}
		>
			{children}
		</Progress.Label>
	)
}

export const ProgressValue = (props: ProgressValueProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Progress.Value
			{...restProps}
			className={toClassNames("progress__value", className)}
		>
			{children}
		</Progress.Value>
	)
}

export const ProgressTrack = (props: ProgressTrackProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Progress.Track
			{...restProps}
			className={toClassNames("progress__track", className)}
		>
			{children}
		</Progress.Track>
	)
}

export const ProgressIndicator = (props: ProgressIndicatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Progress.Indicator
			{...restProps}
			className={toClassNames("progress__indicator", className)}
		/>
	)
}