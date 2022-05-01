const randomIntegerBetweenInclusiveBounds = (a, b) => {
	return a + Math.floor(Math.random() * (b - a + 1));
};

/*
console.clear();
for (const [a, b] of [
	[0, Infinity], //Infinity
	[-Infinity, Infinity], //Nan
	[-Infinity, -Infinity], //-Infinity

	[0, 0], //0
	[0, null], //0
	[null, 0], //0
	[null, null], //0

	[null, true], //1
	[0, 1], //1
	[0, -1], //-1
	[-1, 0], //-1
	[-1, -1], //-1

	[-3, -3], //-3

	[-3, -1], //eg-3
	[-3, -8], //eg-5
	[-3, 1], //eg-1
	[3, 89][(-10, +10)], //eg 62 //eg -6

	[1, 10],
	[2, 10],
	[3, 10],
	[9, 10],

	[10, 5],

	[2, 4],
	[4, 8],
	[8, 16],
	[100, 500]
]) {
	console.log(`${a}| ${randomIntegerBetweenInclusiveBounds(a, b)} |${b}`);
}
*/