// prettier-ignore
const isPlainObject = e => {
	if (e && 'object' === typeof e) {
		const p = Object.getPrototypeOf(e);
		return p
            ? Object.prototype === p
            : null === p;
	}
	return false;
};
