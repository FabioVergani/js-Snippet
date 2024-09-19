const { Math } = globalThis;

//----------------------------------------------------------------------------------------------------------------------

/**
 * Clamps a value between a minimum and maximum value.
 * @param {number} [num=0] - The value to clamp.
 * @param {Object} range
 * @param {number} [range.min=-Infinity]
 * @param {number} [range.max=+Infinity]
 * @returns {number} - The clamped value.
 */
export const clamp = (num, range) => {
	const { max: a, min: b } = range || {};
	// prettier-ignore
	return Math.max(
		Math.min(
			num || 0 === num
				? num
				: 0,
			a || 0 === a
				? a
				: Infinity
		),
		b || 0 === b
			? b
			: -Infinity
	);
};

/**
 * Clamps a value between zero and one.
 * @param {number} num - The value to clamp.
 * @returns {number} - The clamped value into 0-1 range.
 */
export const clampToUnit = num => clamp(num, { min: 0, max: 1 });
