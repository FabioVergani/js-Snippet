const bothAreObjects = (a, b) => {
    const type = typeof a;
    return type !== typeof b
        ? false
        : 'object' === type && null !== a && null !== b;
};

const areEqualArrays = (a, b) => {
    if (a !== b) {
        const areComparable = bothAreObjects;
        if (areComparable(a, b)) {
            if (a.length !== b.length) {
                return false;
            } else {
                return !a.some((aVal, index) => {
                    const bVal = b[index];
                    if (aVal !== bVal) {
                        if (areComparable(aVal, bVal)) {
                            console.log('compare val', aVal, bVal);
                            let i = Object.entries;
                            const aValEntries = i(aVal),
                                bValEntries = i(bVal);
                            i = aValEntries.length;
                            if (i !== bValEntries.length) {
                                return true;
                            } else {
                                while (i > 0) {
                                    --i;
                                    const iA = aValEntries[i],
                                        iB = bValEntries[i];
                                    console.log(iA, iB);
                                    if (iA[0] !== iB[0]) {
                                        return true; //key are diff
                                    } else {
                                        const iAv = iA[1],
                                            iBv = iB[1];
                                        if (iAv !== iBv) {
                                            if (areComparable(iAv, iBv)) {
                                                console.log(
                                                    'compare subVal',
                                                    iAv,
                                                    iBv
                                                );
                                                const f = JSON.stringify;
                                                return f(iAv) !== f(iBv);
                                            } else {
                                                return true;
                                            }
                                        } else {
                                            return false;
                                        }
                                    }
                                }
                            }
                        } else {
                            return true;
                        }
                    } else {
                        return false;
                    }
                });
            }
        } else {
            return false;
        }
    } else {
        // same memory pointer
        return true;
    }
};
