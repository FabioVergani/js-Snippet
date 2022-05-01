// prettier-ignore
function filterInPlace(m, ƒ) {
	if (ƒ) {
		let i = 0, l = m.length;
		while (i < l) {
			if (ƒ(m[i])) {
				m.splice(i,1)
			} else {
				++i
			}
		}
	}
	return m
}

/*
// test:
const m = [1, 2, 3, 4, 5, 6];
// prettier-ignore
for (const [array, filter, expected] of [
	[
		m, // [1, 2, 3, 4, 5, 6]
		null,
		'1,2,3,4,5,6'
	],
	[
		m, // [1, 2, 3, 4, 5]
		e => 5 < e,
		'1,2,3,4,5'
	],
	[
		m, // [1, 2, 3, 4, 5]
		e => 0 === e % 2,
		'1,3,5'
	],
	[
		m, // [1, 3, 5]
		e => e > 10,
		'1,3,5'
	],
	[
		m, // []
		e => e > 0,
		''
	],
]) {
	// const input = [...array];
	const filtered = filterInPlace(array, filter);
	// console.debug({ input, filtered: [...filtered] });
	console.log(
		filtered === array &&
		filtered.join() === expected
	);
}
*/