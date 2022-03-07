//const clamp = ( n, min, max ) => ( n <= min ? min : n >= max ? max : n );

const clamp = ( n, a, b ) => ( n <= a ? a : n >= b ? b : n );

//Restrict Number to Range within min and max
const clamp2 = (min, val, max) => Math.max(min, Math.min(val, max));

const clamp3 = (num, min, max) => Math.min(Math.max(num, min), max);
