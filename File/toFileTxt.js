	const getTimeStamp = () => {
		const e = new Date();
		return `${
			e.getDate()
		}${
			e.getMonth()+1
		}${
			e.getFullYear()
		}-${
			e.getHours()
		}${
			e.getMinutes()
		}${
			e.getSeconds()
		}`
	},
	textPlain = {
		type: 'text/plain;charset=utf-8'
	},
	toFileTxt = (name,str) => {
		const
			e = document.createElement('a'),
			url = e.href = URL.createObjectURL(
				new File(
					[new Blob([str],textPlain)],
					(e.download = name),
					textPlain
				)
			);
		document.body.appendChild(e);
		e.click();
		e.remove();
		URL.revokeObjectURL(url);
	};
