String.prototype.toDash = function(){
	return this.replace(/([A-Z])/g, function($1){return "-"+$1.toLowerCase();});
};
