const randomArray = (arr = []) =>
  Math.random() * 10 < 9
    ? randomArray([...arr, Math.floor(Math.random() * 10)])
    : arr

const nestedRandomArray = (depth = 0, arr = [], fillWith) =>
  depth == 0
    ? arr
    : nestedRandomArray(depth - 1, [...randomArray(), arr])

const array = nestedRandomArray(3000)
