// prettier-ignore
function removeInPlace(m, values) {
	if (values) {
		let i = 0, l = m.length;
		while (i < l) {
			for (const v of values) {
				if (v === m[i]) {
					m.splice(i, 1);
					continue
				}
			}
			++i
		}
	}
	return m
}

/*
// test:
const m = [1, 2, 3, 4, 5, 6];
// prettier-ignore
for (const [array, valuesToRemove, expected] of [
	[
		m, // [1, 2, 3, 4, 5, 6]
		null,
		'1,2,3,4,5,6'
	],
	[
		m, // [1, 2, 3, 4, 5]
		[6],
		'1,2,3,4,5'
	],
	[
		m, // [1, 2, 3, 4, 5]
		[2,4],
		'1,3,5'
	],
	[
		m, // [1, 3, 5]
		[8,9],
		'1,3,5'
	],
	[
		m, // []
		[1,3,5],
		''
	],
]) {
	// const input = [...array];
	const filtered = removeInPlace(array, valuesToRemove);
	// console.debug({ input, filtered: [...filtered] });
	console.log(
		filtered === array &&
		filtered.join() === expected
	);
}
*/