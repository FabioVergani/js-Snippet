		$minify.onclick=event=>{
			const s=$textarea.value.trim();
			if(event.currentTarget.disabled=s.length?true:false){
				fetch('https://closure-compiler.appspot.com/compile',{
					headers:{'Content-Type':'application/x-www-form-urlencoded'},
					body:['js_code=','&output_info=errors&output_info=compiled_code&output_format=json'].join(encodeURIComponent(s)),
					method:'POST',
				}).then(resp=>resp.json()).then(handleClosureCompilerResponse)
			}
		};		

/*
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
*/
