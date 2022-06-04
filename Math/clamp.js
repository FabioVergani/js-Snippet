//const clamp = ( n, min, max ) => ( n <= min ? min : n >= max ? max : n );

/*
const clamp = ( n, a, b ) => ( n <= a ? a : n >= b ? b : n );

//Restrict Number to Range within min and max
const clamp = (num, min, max) => Math.min(Math.max(num, min), max);


const clamp = (n, min, max) => {
	const a = min ?? -Infinity, b = max ?? Infinity;
	return n <= a ? a : n >= b ? b : n;
};

*/

// prettier-ignore
const clamp = (n, params) => {
	const i = Infinity,
	a = params.min ?? -i,
	b = params.max ?? i;
	return n <= a ? a : n >= b ? b : n;
};
