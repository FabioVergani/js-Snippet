const arrayChunkBySize = (arr, maxChunkSize) => {
    const matrix = [];
    const len = arr?.length;
    if (len && len > maxChunkSize) {
        for (let i = 0; i < len; ++i) {
            const j = i + maxChunkSize;
            matrix.push(arr.slice(i, j));
            i = j - 1;
        }
    }
    return matrix;
};
/*
{
    {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const size = 1;
        const expected = arr;
        const result = arrayChunkBySize(arr, size);
        console.log({ arr, size, expected, result });
    }
    {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const size = 4;
        const expected = [
            [1, 2, 3, 4],
            [5, 6, 7, 8]
        ];
        const result = arrayChunkBySize(arr, size);
        console.log({ arr, size, expected, result });
    }
    {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const size = 6;
        const expected = [
            [1, 2, 3, 4, 5, 6],
            [7, 8]
        ];
        const result = arrayChunkBySize(arr, size);
        console.log({ arr, size, expected, result });
    }
    {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const expected = [[1, 2, 3, 4, 5, 6, 7, 8]];
        const size = 8;
        const result = arrayChunkBySize(arr, size);
        console.log({ arr, size, expected, result });
    }
    {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8];
        const expected = [[1, 2, 3, 4, 5, 6, 7, 8]];
        const size = 12;
        const result = arrayChunkBySize(arr, size);
        console.log({ arr, size, expected, result });
    }
    {
        const arr = [];
        const expected = [];
        const size = 3;
        const result = arrayChunkBySize(arr, size);
        console.log({ arr, size, expected, result });
    }
    {
        const arr = [1, 2];
        const expected = [];
        const size = 0;
        const result = arrayChunkBySize(arr, size);
        console.log({ arr, size, expected, result });
    }
}
*/
