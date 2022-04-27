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
