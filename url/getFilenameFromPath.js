const getFilenameFromPath=(w=>{
	'use strict';
	return w.Object.defineProperty(
		path=>{
			const file=path.split(['/','//','\\']).pop().split('?')[0],ext=file.slice((file.lastIndexOf('.')-1)+2);
			return {file,ext}
		},
		'name',
		{
			value:'getFilenameFromPath'
		}
	)
})(window);
console.log(getFilenameFromPath('https://xem.github.io/terser-online/xx.aaa??v=22#3').ext);
//-------------------------------------------------------------------------------------------------------------------
