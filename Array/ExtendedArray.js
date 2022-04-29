// prettier-ignore
class ExtendedArray extends Array {
  drop(i){
    return this.splice(i, 1).length;
  }
  remove(e) {
    const m = this, i = m.indexOf(e);
    return -1 !== i && m.drop(i);
  }
  removeAll(e) {
    const m = this;
    let i = 0, l = m.length, j=0;
    while (i < l) {
      if (e === m[i]) {
        m.drop(i) && ++j;
        --l;
      } else {
        ++i;
      }
    }
    return j;
  }
}

/*
let arr = new ExtendedArray(1, 1, 5,3, 5, 1, 1, 5);
console.log('drop',arr.drop(1615));
console.log('removed',arr.remove(3));
console.log('removed',arr.removeAll(1));
console.log(arr);
*/
