/**
 * Clamps a numeric value between a specified minimum and maximum bounds.
 */
export const clamp = (value: number, min: number, max: number) => {
	return Math.max(min, Math.min(value, max))
}