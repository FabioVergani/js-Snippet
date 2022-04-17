const addChildAt = (a, b, i) => {
	const m = a.children;
	if (i >= m.length) {
		a.append(b);
	} else {
		a.insertBefore(b, m[i]);
	}
};
