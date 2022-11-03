const inColumns = (arr, cols) => {
    const m = [];
    const len = arr?.length;
    if (len) {
        const c = cols | 0;
        if (2 > c) {
            m[0] = [arr];
        } else {
            for (let n = c, i = 0; i < n; ++i) {
                m[i] = [];
            }
            for (let a = arr, n = len, i = 0; i < n; ++i) {
                m[i % cols].push(a[i]);
            }
        }
    } else {
        m[0] = [];
    }
    return m;
};
