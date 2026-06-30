import { describe, it, expect } from "vitest"

import { getAvatarInitials } from "../src/components/avatar/avatar.utils"

describe("getAvatarInitials", () => {
	it("takes the first letter of the first two words", () => {
		expect(getAvatarInitials("John Smith")).toBe("JS")
	})
	it("uppercases a single-word initial", () => {
		expect(getAvatarInitials("kate")).toBe("K")
	})
	it("caps at two words", () => {
		expect(getAvatarInitials("John Ronald Reuel Tolkien")).toBe("JR")
	})
	it("trims and collapses whitespace", () => {
		expect(getAvatarInitials("  ada  lovelace ")).toBe("AL")
	})
	it("falls back for empty / missing input", () => {
		expect(getAvatarInitials("")).toBe("?")
		expect(getAvatarInitials(undefined)).toBe("?")
	})
})
