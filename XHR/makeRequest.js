		const makeRequest(a,b)=>{//resolve,reject
			const xhr=new XMLHttpRequest();
			xhr.onreadystatechange=event=>{
				const xhr=event.currentTarget;
				if(4===xhr.readyState){//complete!
					xhr.onreadystatechange=null;
					const i=xhr.status;
					((i>199&&i<300)?a:b)(xhr,i)
				}
			};
			xhr.open('HEAD',url);//asynchronously
			xhr.send()
		};
