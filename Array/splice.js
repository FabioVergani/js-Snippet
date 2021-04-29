const m = [1, 2, 3, 'x', 4, 5, 6, 'x', 7, 8, 9, 10, 'x', 11, 12];

for (let i = m.length; i;) {
	if ('x' === m[--i]) {
		m.splice(i, 1);
	}
}
console.log(m);



/*
for (let i = 0; i < m.length; ++i){
	if ('x' === m[i]) {
		m.splice(i, 1);
      --i;
	}
}
*/
