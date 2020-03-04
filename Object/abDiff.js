//own enumerable properties of 'a' that differ from accessible properties of 'b'
const abDiff = (a, b) => {
    const e = Object.create(null);
    for (const [i, v] of Object.entries(a)) {
        if (v !== b[i]) {
            e[i] = v;
        }
    }
    return e;
};
