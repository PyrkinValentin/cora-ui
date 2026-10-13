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
import { ChevronDown, X } from "../../icons"

/**
 * Groups all parts of the autocomplete.
 * Doesn't render its own HTML element.
 */
export const AutocompleteRoot = <Value = unknown>(props: AutocompleteRootProps<Value>) => {
	const {
		items,
		children,
		...restProps
	} = props

	return (
		<Autocomplete.Root
			{...restProps}
			items={items as never}
		>
			{children}
		</Autocomplete.Root>
	)
}

/**
 * A wrapper for the input and its associated controls.
 * Renders a `<div>` element.
 */
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

/**
 * A text input to search for items in the list.
 * Renders an `<input>` element.
 */
export const AutocompleteInput = (props: AutocompleteInputProps) => {
	const {
		className,
		...restProps
	} = props

	return (
		<Autocomplete.Input
			{...restProps}
			className={toClassNames("autocomplete__input", className)}
		/>
	)
}

/**
 * A button that opens the popup.
 * Renders a `<button>` element.
 */
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

/**
 * An icon that indicates that the trigger button opens the popup.
 * Renders a `<span>` element.
 */
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

/**
 * Clears the value when clicked.
 * Renders a `<button>` element.
 */
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

/**
 * The current value of the autocomplete.
 * Doesn't render its own HTML element.
 */
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

/**
 * A portal element that moves the popup to a different part of the DOM.
 * By default, the portal element is appended to `<body>`.
 * Renders a `<div>` element.
 */
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

/**
 * An overlay displayed beneath the popup.
 * Renders a `<div>` element.
 */
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

/**
 * Positions the popup against the trigger.
 * Renders a `<div>` element.
 */
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

/**
 * A container for the list.
 * Renders a `<div>` element.
 */
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

/**
 * Displays an element positioned against the anchor.
 * Renders a `<div>` element.
 */
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

/**
 * Displays a status message whose content changes are announced politely to screen readers.
 * Useful for conveying the status of an asynchronously loaded list.
 * This component's root element must remain mounted in the DOM to announce
 * changes consistently across screen readers. Avoid hiding or removing the
 * component itself with `display: none`, `hidden`, `aria-hidden`, or conditional
 * rendering. Prefer updating or conditionally rendering its children instead.
 * Renders a `<div>` element.
 */
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

/**
 * Renders its children only when the list is empty.
 * Requires the `items` prop on the root component.
 * Announces changes politely to screen readers.
 * This component's root element must remain mounted in the DOM to announce
 * changes consistently across screen readers. Avoid hiding or removing the
 * component itself with `display: none`, `hidden`, `aria-hidden`, or conditional
 * rendering. Prefer updating or conditionally rendering its children instead.
 * Renders a `<div>` element.
 */
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

/**
 * A list container for the items.
 * Renders a `<div>` element.
 */
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

/**
 * Displays a single row of items in a grid list.
 * Enable `grid` on the root component to turn the listbox into a grid.
 * Renders a `<div>` element.
 */
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

/**
 * An individual item in the list.
 * Renders a `<div>` element.
 */
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

/**
 * A separator element accessible to screen readers.
 * Renders a `<div>` element.
 */
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

/**
 * Groups related items with the corresponding label.
 * Renders a `<div>` element.
 */
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

/**
 * An accessible label that is automatically associated with its parent group.
 * Renders a `<div>` element.
 */
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

/**
 * Renders filtered list items.
 * Doesn't render its own HTML element.
 *
 * If rendering a flat list, pass a function child to the `List` component instead, which implicitly wraps it.
 */
export const AutocompleteCollection = (props: AutocompleteCollectionProps) => {
	const { children } = props

	return (
		<Autocomplete.Collection>
			{children}
		</Autocomplete.Collection>
	)
}