const getFileFromPath=(w=>{
	'use strict';
	return w.Object.defineProperty(
		path=>{
			const a=path.split('/').pop().split('.');
			return {
				ext:a.pop().split('?')[0],
				name:a.pop(),
			}
		},
		'name',
		{
			value:'getFileFromPath'
		}
	)
})(window);
//-------------------------------------------------------------------------------------------------------------------
//console.dir(getFileFromPath('https://xem.github.io/terser-online/xx.aaa??v=22#3'));
