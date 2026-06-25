export type GetAvatarInitialsOptions = {
	/** The value returned if the name is empty or cannot be parsed. */
	fallback?: string
	/** The maximum number of initials to extract from a single word. */
	maxOneWordLength?: number
	/** The maximum total length of the returned initials string. */
	maxLength?: number
}