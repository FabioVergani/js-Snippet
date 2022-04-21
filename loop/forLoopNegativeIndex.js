const m = [1, 2, 3, 4, 5, 6, 7];
const mLen = m.length;
const negativeIndex = 3
for (let i = mLen - Math.min(mLen,negativeIndex); i < mLen; ++i) {
	console.log(i+':'+m[i])
}
