							const b=document.body,s=b.style;
							s.display='none';
							while(i=b.lastChild){
								i.remove()
							};
							s.display='block';


//

							const b=document.body;
							b.replaceWith(b.cloneNode(false));
