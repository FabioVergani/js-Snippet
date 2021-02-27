	/*
      Consider matrices to be equal if they are of the same:
      - length
      - values order
    */
	const areEqualArrays = (a, b) => {
		const l = a.length;
		if (l !== b.length) {
			return false;
		} else {
			for (let i = 0; i < l; ++i) {
				if (a[i] !== b[i]) {
					return false;
				}
			}
			return true;
		}
	};
