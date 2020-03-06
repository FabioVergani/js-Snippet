const bothAreObjects = (a, b) => {
  const x = typeof a;
  return x !== typeof b ? false : "object" === x;
};

const areEqualArrays = (a, b) => {
  if (a.length !== b.length) {
    return false;
  } else {
    const foundiff = a.some((aVal, i, m) => {
      const bVal = b[i];
      if (aVal !== bVal) {
        const areComparable = bothAreObjects;
        if (areComparable(aVal, bVal)) {
          //console.log("compare val", aVal, bVal);
          const entriesOf = Object.entries,
            aValEntries = entriesOf(aVal),
            bValEntries = entriesOf(bVal);
          let i = aValEntries.length;
          if (i !== bValEntries.length) {
            return true;
          } else {
            while (i > 0) {
              const iA = aValEntries[--i],
                iB = bValEntries[i];
              //console.log(iA, iB);
              if (iA[0] !== iB[0]) {
                return true; //key are diff
              } else {
                const iAv = iA[1],
                  iBv = iB[1];
                if (iAv !== iBv) {
                  if (areComparable(iAv, iBv)) {
                    //console.log("compare subVal", iAv, iBv);
                    return (
                      entriesOf(iAv).toString() !== entriesOf(iBv).toString()
                    );
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
    return true !== foundiff;
  }
};
//=========================================

const x = { q: 1 };
const oA = { p: x };
const oB = { p: { q: 1 } };

const a = [1, 2, oA];
const b = [1, 2, oB];

console.log(2, areEqualArrays(a, b)); // true
