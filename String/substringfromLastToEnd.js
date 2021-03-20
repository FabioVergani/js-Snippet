const substringfromLastToEnd = (a,b,c) => {
	let i = a.lastIndexOf(b);
	const s = i < 0 ? a : a.substring(1+i,a.length);
	return c ? s.substring(0,(i=s.indexOf(c))<0?s.length:i) : s;
};

/*
console.log(1,substringfromLastToEnd('ss/sa/r/rs.xx?w?w','/','?'))
console.log(1,substringfromLastToEnd('ss/sa/r/rs.xxww666','/','?'))
*/
