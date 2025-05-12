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

// prettier-ignore
const deepMerge = (target, source) => {
	if (isPlainObject(source)) {
		const object = isPlainObject(target) ? { ...target } : {};
		const stack = [[object, source]];
		const visited = new Set();
		do {
			const [a, b] = stack.pop();
			if (!visited.has(b)) {
                visited.add(b);
                for (const [key, value] of Object.entries(b)) {
                    const e = a[key];
                    if (isPlainObject(value)) {
                        stack.push([
                            isPlainObject(e)
                                ? e !== value
                                    ? e
                                    : (a[key] = { ...value })
                                : (a[key] = {}),
                            value
                        ]);
                    } else {
                        a[key] = value;
                    }
                }
			}
		} while (stack.length);
		return object;
	}
	return source;
};
