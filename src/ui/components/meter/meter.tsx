"use client"

import type {
	MeterRootProps,
	MeterLabelProps,
	MeterValueProps,
	MeterTrackProps,
	MeterIndicatorProps,
} from "./meter.props"

import { toClassNames } from "../../utils"

import { Meter } from "@base-ui/react/meter"

export const MeterRoot = (props: MeterRootProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Meter.Root
			{...restProps}
			className={toClassNames("meter", className)}
		>
			{children}
		</Meter.Root>
	)
}

export const MeterLabel = (props: MeterLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Meter.Label
			{...restProps}
			className={toClassNames("meter__label", className)}
		>
			{children}
		</Meter.Label>
	)
}

export const MeterValue = (props: MeterValueProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Meter.Value
			{...restProps}
			className={toClassNames("meter__value", className)}
		>
			{children}
		</Meter.Value>
	)
}

export const MeterTrack = (props: MeterTrackProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Meter.Track
			{...restProps}
			className={toClassNames("meter__track", className)}
		>
			{children}
		</Meter.Track>
	)
}

export const MeterIndicator = (props: MeterIndicatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Meter.Indicator
			{...restProps}
			className={toClassNames("meter__indicator", className)}
		/>
	)
}