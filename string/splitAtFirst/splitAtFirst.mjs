/**
 * Splits a string at the first occurrence of a delimiter.
 * Returns the parts before and after the delimiter,
 * or the original string if the delimiter is falsy.
 *
 * @param {string} a - The input to split
 * @param {string} b - The delimiter to split on
 * @returns {string[]} [before, after] | [original]
 *
 * @example
 * ('abc--def', '--') ➝ ['abc', 'def']
 * ('a:b:c', ':') ➝ ['a', 'b:c']
 * ('a-b-c', '-') ➝ ['a', 'b-c']
 * ('abc', 'abc') ➝ ['abc']
 * ('abc', '-') ➝ ['abc']
 * ('abc', '') ➝ ['abc']
 * ('x|', '-') ➝ ['x|']
 * ('', '-') ➝ ['']
 *
 */
// prettier-ignore
export const splitAtFirst = (a, b) => {
	const m = [a];
	if (a && b && a !== b) {
		const i = a.indexOf(b);
		if (0 <= i) {
			m[0] = a.slice(0, i);
			const after = a.slice(i + b.length);
			if (after) {
				m[1] = after;
			}
		}
	}
	return m;
};
