	const toFileTxt = (name,str) => {
		const
			{
				URL: U,
				Blob: B,
				document: d
			} = window,
			e = d.createElement('a'),
			textPlain = {
				type: 'text/plain;charset=utf-8'
			},
			url = e.href = U.createObjectURL(
				new File(
					[
						new B(
							[str],
							textPlain
						)
					],
					(e.download = name),
					textPlain
				)
			);
		d.body.appendChild(e);
		e.click();
		e.remove();
		U.revokeObjectURL(url);
	}

/*
  const btn = (id,fn) => {
		const e = document.getElementById(id);
		if(e){
			e.disabled = false;
			e.onclick = fn;
		}
	};

	btn('JS',() => {
		toFileTxt(`build_${getTimeStamp()}.js`,'');
	});
  
*/
