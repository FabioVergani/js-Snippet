const generateCombinations = items => {
	const result = [];
	const n = items.length;
	const l = 1 << n;
	for (let i = 3; l > i; ++i) {
		if (0 !== (i & (i - 1))) {
			const m = [];
			for (let j = 0; n > j; ++j) {
				(i & (1 << j)) && m.push(items[j]);
			}
			result.push(m.join('.'));
		}
	}
	return result;
};

//return result.sort((a, b) => a.length - b.length || a.localeCompare(b));
/*
// Esempio d'uso
const input = ['a', 'b', 'c1', 'c22', 'd3333'];
const combinations = generateCombinations(input);

console.log( combinations)
0: "a.b"
1: "a.c1"
2: "b.c1"
3: "a.b.c1"
4: "a.c22"
5: "b.c22"
6: "a.b.c22"
7: "c1.c22"
8: "a.c1.c22"
9: "b.c1.c22"
10: "a.b.c1.c22"
11: "a.d3333"
12: "b.d3333"
13: "a.b.d3333"
14: "c1.d3333"
15: "a.c1.d3333"
16: "b.c1.d3333"
17: "a.b.c1.d3333"
18: "c22.d3333"
19: "a.c22.d3333"
20: "b.c22.d3333"
21: "a.b.c22.d3333"
22: "c1.c22.d3333"
23: "a.c1.c22.d3333"
24: "b.c1.c22.d3333"
25: "a.b.c1.c22.d3333"
*/
