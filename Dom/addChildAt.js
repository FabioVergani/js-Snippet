const addChildAt = (a, b, i) => {
	const m = a.children, l = m.length;
	if (l) {
		m[(i >= l ? l : i) - 1].after(b);
	} else {
		a.append(b);
	}
};
