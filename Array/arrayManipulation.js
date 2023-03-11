function arrayManipulation(n, queries) {
    let arr = new Array(n).fill(0);
    queries.forEach(query => {
        let [a, b, k] = query;
        arr[a-1] += k;
        arr[b] -= k;
    })
    let [max, sum] = [0, 0];
    arr.forEach(val => {
        sum += val;
        max = sum > max ? sum : max;
    })
    return max;
}
