import type { GetAvatarInitialsOptions } from "./avatar.types"

const SPACES_REGEX = /\s+/

/**
 * Generates initial letters from a user's name for the avatar placeholder.
 *
 * @param name - The full name or username.
 * @param options - Configuration options for initials generation.
 * @returns The extracted initials in uppercase, or the fallback value.
 */
export const getAvatarInitials = (name?: string, options: GetAvatarInitialsOptions = {}): string => {
	const {
		fallback = "?",
		maxOneWordLength = 1,
		maxLength = 2,
	} = options

	if (
		!name ||
		name.length === 0 ||
		maxOneWordLength <= 0 ||
		maxLength <= 0
	) return fallback

	const trimmed = name.trim()

	if (!trimmed) return fallback

	const words = trimmed.split(SPACES_REGEX)

	if (words.length === 1) {
		const chars = [...words[0]]
		const limitedChars = chars.slice(0, maxOneWordLength)

		const firstChar = limitedChars[0].toUpperCase()
		const restChars = limitedChars
			.slice(1)
			.join("")
			.toLowerCase()

		return firstChar + restChars
	}

	let initials = ""

	for (let i = 0; i < words.length; i++) {
		const word = words[i]
		const [firstChar] = [...word]

		initials += firstChar

		if (initials.length === maxLength) break
	}

	return initials.toUpperCase()
}