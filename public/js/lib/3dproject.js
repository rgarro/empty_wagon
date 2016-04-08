function _3DProject(){
	this.container = null;
	this.renderer = null;
	this.scene = null;
	this.camera = null;
	if(typeof arguments[0] != 'undefined'){
		this.setContainer(arguments[0]);
	}
}

_3DProject.prototype.setContainer = function(containerId){
	if(typeof containerId == 'string'){
		if(document.getElementById(containerId) === null){
			throw new Error(containerId + " does not exist.")
		}else{
			this.container = document.getElementById(containerId);
		}
	}else{
		throw new Error("containerId must be string.");
	}
};

_3DProject.prototype.init = function(){

};