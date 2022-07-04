// prettier-ignore
const clone = e => {
	let x = e;
	const n = x?.constructor?.name;
	if (n && (
		('Object' === n && (x = {})) ||
		('Array' === n && (x = []))
	)) {
		for (const [k, v] of Object.entries(e)) {
			x[k] = clone(v);
		}
	}
	console.debug({ origin: e, cloned: x });
	return x;
};
