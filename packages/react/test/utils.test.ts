import { describe, it, expect } from "vitest"

import { clamp } from "../src/utils/clamp"
import { classNames } from "../src/utils/class-names"
import { toDataAttrs } from "../src/utils/to-data-attrs"

describe("clamp", () => {
	it("returns the value when within bounds", () => {
		expect(clamp(5, 0, 10)).toBe(5)
	})
	it("clamps below the minimum", () => {
		expect(clamp(-3, 0, 10)).toBe(0)
	})
	it("clamps above the maximum", () => {
		expect(clamp(42, 0, 10)).toBe(10)
	})
})

describe("classNames", () => {
	it("joins truthy class values", () => {
		expect(classNames("a", "b")).toBe("a b")
	})
	it("skips falsy values", () => {
		expect(classNames("a", false, null, undefined, "b")).toBe("a b")
	})
	it("supports object and nested array syntax", () => {
		expect(classNames({ a: true, b: false }, ["c", ["d"]])).toBe("a c d")
	})
})

describe("toDataAttrs", () => {
	it("kebab-cases keys and emits empty string for boolean true", () => {
		expect(toDataAttrs({ disabled: true, fooBar: "x" })).toEqual({
			"data-disabled": "",
			"data-foo-bar": "x",
		})
	})
	it("drops false / null / undefined values", () => {
		expect(toDataAttrs({ a: false, b: null, c: undefined })).toEqual({})
	})
	it("returns an empty object for no input", () => {
		expect(toDataAttrs()).toEqual({})
	})
})
