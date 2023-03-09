/*
function getUniqueByKey(arr, key) {
    return [...new Map(arr.map(item => [item[key], item])).values()];
} --> wrong on edge case
*/

// empty if no object to the key:
export const reduceToUniquesByKey = (arr, key = 'id') =>
    arr?.reduce((acc, curr) => {
        if (key in curr) {
            const val = curr[key];
            acc.find(e => val === e[key]) || acc.push(curr);
        }
        return acc;
    }, []);
