(function(global,settings){'use strict';
 function at(e,s,f,x){function a(){e.removeEventListener(s,i)}function i(o){a();f(o)}a();e.addEventListener(s,i,x)}
 function swapClass(e,a,b){var o=e.classList;o.remove(a);o.add(b);return o;}
 //
 function tagFilter(rootSelector, tagsContainerSelector){
	const d=doc, Root=d.querySelector(rootSelector);
	if(Root){
	 const tagsContainer=Root.querySelector(tagsContainerSelector);
	 if(tagsContainer){
		const obj=aRawObject,
		db=obj(),
		dbCategorie=db.categories=obj({byTag:{value:obj()}}),
		categoriesFounded=(dbCategorie.categoriesItems=obj({byTag:{value:obj()}})).byCategory=obj(),
		dbCategoriesWrappers=dbCategorie.allwrappers=[],
		dbCategoriesItems=dbCategorie.allitems=[],
		dbCategoriesNames=dbCategorie.categoriesNames=[],
		dbTags=dbCategorie.alltags=[],
		unsafeChars=/\W/g;
		//
		toArray(Root.querySelectorAll('[data-category]')).forEach(function(itemsWrapper){
			const e=itemsWrapper, b=e.dataset, c=b.category.replace(unsafeChars,'_'), m=categoriesFounded;
			let o=m[b.category=c];
			if(o){
				o.categoryWrappers.push(e)
			}else{
				o=m[c]=obj();
				o.categoryTags=[];
				o.categoryWrappers=[e];
				(o.categoryItems=obj({byTag:{value:obj()}})).all=[];
				o.attiva=false;
				dbCategoriesNames.push(c)
			};
			e.classList.add('category-wrapper','filtered');
			dbCategoriesWrappers.push(e);
			const oTags=o.categoryTags, items=o.categoryItems, allItems=items.all, itemsByTag=items.byTag, aci=dbCategoriesItems;
			toArray(e.tagged=e.querySelectorAll('[data-tags]')).forEach(function(taggedItem){
				const used=oTags, founded=dbTags, grouped=itemsByTag, all=aci, x=taggedItem;
				x.category={tag:c,wrapper:e};
				all.push(x);
				allItems.push(x);
				x.className='filtered';
				x.dataset.tags.split(/\s*,\s*/).forEach(function(tag){
					let  m=grouped;
					const i=tag, g=m[i], b=x;
					if(g){
						g.push(b)
					}else{
						m[i]=[b];
						used.push(i);
						m=founded;
						if(m.indexOf(i)<0){m.push(i)}
					};
					const categoriesItemsByTag=dbCategorie.categoriesItems.byTag;
					m=categoriesItemsByTag[i];
					if(m){m.push(b)}else{categoriesItemsByTag[i]=[b]}
				});
			});
		});
		//
		dbCategoriesNames.forEach(function(i){
			const c=dbCategorie, CategoriesByTag=c.byTag, slot=c.categoriesItems.byCategory;
			categoriesFounded[i].categoryTags.forEach(function(x){
				const m=CategoriesByTag, a=m[x], b=slot[i];
				if(a){a.push(b)}else{m[x]=[b]};
			});
		});
		//#
	  const toggler=db.togglers=obj(), togglersCategoryContainer=tagsContainer.querySelector('.category'), togglersTagContainer=tagsContainer.querySelector('.tag'), frag=d.createDocumentFragment();
		//
		const toggleCategory=function(evt){
			const e=this, i=e.toggleCategoryKeyword, ct=dbCategorie.categoriesItems.byCategory, o=ct[i], m=o.categoryWrappers, t=o.categoryTags, swap=swapClass;//, c=e.classList
			if(e.isOff){

				e.isOff=false;
				o.attiva=true;
				swap(e,'off','on');
				m.forEach(function(e){e.classList.remove('filtered')});//�attiva
				t.forEach(function(i){const e=toggler[i];e.isOff=true;swap(e,'on','off').remove('hide');});

			}else{//off!

				e.isOff=true;
				o.attiva=false;
				swap(e,'on','off');
				m.forEach(function(e){
					e.classList.add('filtered')
					//console.dir(e.tagged);
					e.tagged.forEach(function(li){li.classList.add('filtered')});
				});//�nascondi


				const tagDaMantenere=[];//�tag-damantenereattivati
				dbCategoriesNames.forEach(function(i){
					const e=ct[i];
					if(e.attiva){
						e.categoryTags.forEach(function(i){
							const m=tagDaMantenere;if(!m.includes(i)){m.push(i)}
						})
					}
				});
				t.forEach(function(i){
					if(!tagDaMantenere.includes(i)){
					 const e=toggler[i];e.isOff=true;swap(e,'on','off').add('hide');
					}
				});

			};
		};
		//
		dbCategoriesNames.forEach(function(i){
			const o=frag, e=toggler[i]=o.appendChild(d.createElement('a'));
			e.innerText=e.toggleCategoryKeyword=i;
			e.onclick=toggleCategory;
			e.isOff=true;
			e.className='off';
			o.appendChild(d.createTextNode('\u0020'));
		});
		togglersCategoryContainer.appendChild(frag);
		togglersCategoryContainer.tagAttivi=[];
		//#
		const toggleTag=function(evt){
			const e=this, swap=swapClass, k=e.toggleTagKeyword, m=dbCategorie.categoriesItems.byTag[k], memo=togglersCategoryContainer.tagAttivi;
			if(e.isOff){
				memo.push(k);
				e.isOff=false;
				swap(e,'off','on');
				m.forEach(function(taggeditem){
					const x=taggeditem;
					if(!x.category.wrapper.classList.contains('filtered')){
						x.classList.remove('filtered')
					};
				});

			}else{//off!

				e.isOff=true;
				swap(e,'on','off');
				m.forEach(function(taggeditem){
					const x=taggeditem;
					if(x.dataset.tags.split(/\s*,\s*/).some(function(v){return v!==k && memo.indexOf(v) >-1})){
						//l'elemento resta visibile
					}else{
						x.classList.add('filtered');
					}

				});
				const j=memo.indexOf(k);
				if(j>-1){memo.splice(j,1)};

			};
			console.info(memo)
		};
		dbCategorie.alltags.forEach(function(i){
			const o=frag, e=toggler[i]=o.appendChild(d.createElement('a'));
			e.innerText=e.toggleTagKeyword=i;
			e.className='off hide';
			e.isOff=true;
			e.onclick=toggleTag;
			o.appendChild(d.createTextNode('\u0020'));
		});
		togglersTagContainer.appendChild(frag);
	  console.dir(db);
	 };
	};
 }
 //
 const win=global, doc=win.document, callable=(function(e){const o=e.prototype;return o.bind.bind(o.call)})(win.Function), toArray=callable(win.Array.prototype.slice), aRawObject=callable(win.Object.create,null,null);
 settings.tagFilters.forEach(function(a){function b(){tagFilter.apply(null,a)}if(doc.readyState!=='complete'){at(win,'DOMContentLoaded',b)}else{b()}});
})(window,{
 tagFilters:[
	['#games','.search .tags'],//[],...
 ]
});
//END.