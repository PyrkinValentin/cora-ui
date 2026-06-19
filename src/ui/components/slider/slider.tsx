"use client"

import type {
	SliderRootProps,
	SliderLabelProps,
	SliderValueProps,
	SliderControlProps,
	SliderTrackProps,
	SliderIndicatorProps,
	SliderThumbProps
} from "./slider.props"

import { toClassNames } from "../../utils"

import { Slider } from "@base-ui/react/slider"

export const SliderRoot = <Value extends number | readonly number[] = number | readonly number[]>(props: SliderRootProps<Value>) => {
	const {
		thumbAlignment = "edge",
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Root
			{...restProps}
			thumbAlignment={thumbAlignment}
			className={toClassNames("slider", className)}
		>
			{children}
		</Slider.Root>
	)
}

export const SliderLabel = (props: SliderLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Label
			{...restProps}
			className={toClassNames("slider__label", className)}
		>
			{children}
		</Slider.Label>
	)
}

export const SliderValue = (props: SliderValueProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Value
			{...restProps}
			className={toClassNames("slider__value", className)}
		>
			{children}
		</Slider.Value>
	)
}

export const SliderControl = (props: SliderControlProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Control
			{...restProps}
			className={toClassNames("slider__control", className)}
		>
			{children}
		</Slider.Control>
	)
}

export const SliderTrack = (props: SliderTrackProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Track
			{...restProps}
			className={toClassNames("slider__track", className)}
		>
			{children}
		</Slider.Track>
	)
}

export const SliderIndicator = (props: SliderIndicatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Slider.Indicator
			{...restProps}
			className={toClassNames("slider__indicator", className)}
		/>
	)
}

export const SliderThumb = (props: SliderThumbProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Slider.Thumb
			{...restProps}
			className={toClassNames("slider__thumb", className)}
		>
			{children}
		</Slider.Thumb>
	)
}