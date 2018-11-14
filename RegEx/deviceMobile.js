const deviceMobile=(n=>{
			let v=false;
			if(n && (v=n.userAgent) && v.length!==0){v=/(?:\b)(?:((?:Android|Chrome)(?:.+)Mobile)|iP(?:hone|od|ad)|Mobile(?:.+)Firefox|Opera Mini|Windows\bARM?\b|B(?:lackBerry|B10))/i.test(v)};
			return v
})(navigator),

/*
			let v=w.navigator;
			if(v && (v=v.userAgent) && v.length!==0 && /(?:\b)(?:((?:Android|Chrome)(?:.+)Mobile)|iP(?:hone|od|ad)|Mobile(?:.+)Firefox|Opera Mini|Windows\bARM?\b|B(?:lackBerry|B10))/i.test(v)){
				d.addEventListener('mousewheel',o=>{if(o.ctrlKey===true){o.preventDefault();c.info('zoom prevented!')}})
			}

*/
