function getTimestamp() {
	const e = new Date();
	return [
		e.getMonth() + 1,
		e.getDate(),
		e.getHours(),
		e.getMinutes(),
		e.getSeconds()
	].reduce(
        (a, b) => a + String(b).padStart(2,'0'),
        e.getFullYear()
    );
}

// console.log(getTimestamp()); // 20230321193930
