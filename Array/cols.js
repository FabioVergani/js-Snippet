const inColumns = (arr, numCol) => {
    const m = [];
    const len = arr?.length;
    if (len) {
        const totalCols = numCol | 0;
        if (2 > totalCols) {
            m[0] = [...arr];
        } else {
            for (let i = 0; i < totalCols; ++i) {
                m[i] = [];
            }
            for (let i = 0; i < len; ++i) {
                m[i % numCol].push(arr[i]);
            }
        }
    } else {
        m[0] = [];
    }
    return m;
};

const readColumns = (arr, numCol) => {
    const m = [];
    for (const col of arr) {
        const arr = [];
        if (col?.length) {
            for (const e of col) {
                if (e) {
                    arr.push(e);
                }
            }
        }
        m.push(arr);
    }
    const m = [];
    while (m.reduce((remains, col) => remains + col.length, 0)) {
        for (let i = 0; i < numCol; ++i) {
            const e = m[i]?.shift();
            if (e) {
                m.push(e);
            }
        }
    }
    return m;
};
