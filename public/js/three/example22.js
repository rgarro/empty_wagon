
function example22(p){
	_3DProject.call(this,p);
}

example22.prototype = Object.create(_3DProject.prototype);

example22.prototype.constructor = example22;