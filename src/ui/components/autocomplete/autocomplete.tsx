"use client"

import type {
	AutocompleteRootProps,
	AutocompleteInputGroupProps,
	AutocompleteInputProps,
	AutocompleteTriggerProps,
	AutocompleteIconProps,
	AutocompleteClearProps,
	AutocompleteValueProps,
	AutocompletePortalProps,
	AutocompleteBackdropProps,
	AutocompletePositionerProps,
	AutocompletePopupProps,
	AutocompleteArrowProps,
	AutocompleteStatusProps,
	AutocompleteEmptyProps,
	AutocompleteListProps,
	AutocompleteRowProps,
	AutocompleteItemProps,
	AutocompleteSeparatorProps,
	AutocompleteGroupProps,
	AutocompleteGroupLabelProps,
	AutocompleteCollectionProps,
} from "./autocomplete.props"

import { toClassNames, toDataAttrs } from "../../utils"

import { Autocomplete } from "@base-ui/react/autocomplete"
import { ChevronDown, X } from "lucide-react"

export const AutocompleteRoot = <ItemValue = unknown>(props: AutocompleteRootProps<ItemValue>) => {
	const {
		items = undefined,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Root
			{...restProps}
			items={items}
		>
			{children}
		</Autocomplete.Root>
	)
}

export const AutocompleteInputGroup = (props: AutocompleteInputGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.InputGroup
			{...restProps}
			className={toClassNames("autocomplete__input-group", className)}
		>
			{children}
		</Autocomplete.InputGroup>
	)
}

export const AutocompleteInput = (props: AutocompleteInputProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Input
			{...restProps}
			className={toClassNames("autocomplete__input", className)}
		>
			{children}
		</Autocomplete.Input>
	)
}

export const AutocompleteTrigger = (props: AutocompleteTriggerProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Trigger
			{...restProps}
			className={toClassNames("autocomplete__trigger", className)}
		>
			{children}
		</Autocomplete.Trigger>
	)
}

export const AutocompleteIcon = (props: AutocompleteIconProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Icon
			{...restProps}
			className={toClassNames("autocomplete__icon", className)}
		>
			{children ?? <ChevronDown/>}
		</Autocomplete.Icon>
	)
}

export const AutocompleteClear = (props: AutocompleteClearProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Clear
			{...restProps}
			className={toClassNames("autocomplete__clear", className)}
		>
			{children ?? <X/>}
		</Autocomplete.Clear>
	)
}

export const AutocompleteValue = (props: AutocompleteValueProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Value {...restProps}>
			{children}
		</Autocomplete.Value>
	)
}

export const AutocompletePortal = (props: AutocompletePortalProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Portal
			{...restProps}
			className={toClassNames("autocomplete__portal", className)}
		>
			{children}
		</Autocomplete.Portal>
	)
}

export const AutocompleteBackdrop = (props: AutocompleteBackdropProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Backdrop
			{...restProps}
			className={toClassNames("autocomplete__backdrop", className)}
		>
			{children}
		</Autocomplete.Backdrop>
	)
}

export const AutocompletePositioner = (props: AutocompletePositionerProps) => {
	const {
		sideOffset = 8,
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Positioner
			{...restProps}
			sideOffset={sideOffset}
			className={toClassNames("autocomplete__positioner", className)}
		>
			{children}
		</Autocomplete.Positioner>
	)
}

export const AutocompletePopup = (props: AutocompletePopupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Popup
			{...restProps}
			className={toClassNames("autocomplete__popup", className)}
		>
			{children}
		</Autocomplete.Popup>
	)
}

export const AutocompleteArrow = (props: AutocompleteArrowProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Autocomplete.Arrow
			{...restProps}
			className={toClassNames("autocomplete__arrow", className)}
		/>
	)
}

export const AutocompleteStatus = (props: AutocompleteStatusProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	const status = !!children

	return (
		<Autocomplete.Status
			{...restProps}
			{...toDataAttrs({ status })}
			className={toClassNames("autocomplete__status", className)}
		>
			{children}
		</Autocomplete.Status>
	)
}

export const AutocompleteEmpty = (props: AutocompleteEmptyProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Empty
			{...restProps}
			className={toClassNames("autocomplete__empty", className)}
		>
			{children}
		</Autocomplete.Empty>
	)
}

export const AutocompleteList = (props: AutocompleteListProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.List
			{...restProps}
			className={toClassNames("autocomplete__list", className)}
		>
			{children}
		</Autocomplete.List>
	)
}

export const AutocompleteRow = (props: AutocompleteRowProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Row
			{...restProps}
			className={toClassNames("autocomplete__row", className)}
		>
			{children}
		</Autocomplete.Row>
	)
}

export const AutocompleteItem = (props: AutocompleteItemProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Item
			{...restProps}
			className={toClassNames("autocomplete__item", className)}
		>
			{children}
		</Autocomplete.Item>
	)
}

export const AutocompleteSeparator = (props: AutocompleteSeparatorProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Autocomplete.Separator
			{...restProps}
			className={toClassNames("autocomplete__separator", className)}
		/>
	)
}

export const AutocompleteGroup = (props: AutocompleteGroupProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Group
			{...restProps}
			className={toClassNames("autocomplete__group", className)}
		>
			{children}
		</Autocomplete.Group>
	)
}

export const AutocompleteGroupLabel = (props: AutocompleteGroupLabelProps) => {
	const {
		className,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.GroupLabel
			{...restProps}
			className={toClassNames("autocomplete__group-label", className)}
		>
			{children}
		</Autocomplete.GroupLabel>
	)
}

export const AutocompleteCollection = (props: AutocompleteCollectionProps) => {
	const {
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Collection {...restProps}>
			{children}
		</Autocomplete.Collection>
	)
}