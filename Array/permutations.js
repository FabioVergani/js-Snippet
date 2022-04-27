const permutations = value => {
  let depth = value.length;
  let results = [];

  const permute = queue => {
    if (queue.length === depth) {
      results.push(queue.join(''));
    } else {
      for (const e of value) {
        permute(queue.concat(e));
      }
    }
  };

  permute([]);
  return results;
};

console.log(permutations('ab')); 


//----

const cartesianProduct = (a, b) =>
  a.reduce((p, x) => [...p, ...b.map(y => [x, y])], []);

cartesianProduct(['x', 'y'], [1, 2]);
// [['x', 1], ['x', 2], ['y', 1], ['y', 2]]
