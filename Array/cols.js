export const inColumns = (arr, numCol) => {
    const matrix = [];
    const len = arr?.length;
    if (len) {
        const totalCols = numCol | 0;
        if (2 > totalCols) {
            matrix[0] = [...arr];
        } else {
            for (let i = 0; i < totalCols; ++i) {
                matrix[i] = [];
            }
            for (let i = 0; i < len; ++i) {
                matrix[i % numCol].push(arr[i]);
            }
        }
    } else {
        matrix[0] = [];
    }
    return matrix;
};

export const readColumns = (arr, numCol) => {
    const matrix = [];
    for (const col of arr) {
        const arr = [];
        if (col?.length) {
            for (const e of col) {
                if (e) {
                    arr.push(e);
                }
            }
        }
        matrix.push(arr);
    }
    const m = [];
    while (matrix.reduce((remains, col) => remains + col.length, 0)) {
        for (let i = 0; i < numCol; ++i) {
            const e = matrix[i]?.shift();
            if (e) {
                m.push(e);
            }
        }
    }
    return m;
};
