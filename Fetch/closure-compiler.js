		fetch('https://closure-compiler.appspot.com/compile',{
			headers:{'Content-Type':'application/x-www-form-urlencoded'},
			body:[
				['js_code',6666],
				['output_info','errors'],
				['output_info','compiled_code'],
				['output_format','json']
			].map(
				([key,val])=>[encodeURIComponent(key),encodeURIComponent(val)].join('=')
			).join('&'),
			method:'POST',
		}).then(resp =>{
			const v=resp.json();
			console.dir(v.compiledCode)
		})
