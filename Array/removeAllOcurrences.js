const removeAllOcurrences = (array, e) => {
	while (array.length) {
		const i = array.indexOf(e);
		if (-1 !== i) {
			array.splice(i, 1);
		} else {
			break;
		}
	}
};
