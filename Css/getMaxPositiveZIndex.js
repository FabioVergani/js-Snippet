// z-index: 2147483638;
function getMaxPositiveZIndex() {
	let i = 0;
	const f = window.getComputedStyle;
	for (const e of document.getElementsByTagName('*')) {
		const n = f(e).zIndex;
		if (!isNaN(n) && n> i) {
			i = n;
		}
	}
	console.log(i);
	return i;
}
