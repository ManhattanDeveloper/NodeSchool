
module.export = function(name, filter,filterFunction){
	var path = require('path');
	var fs   = require('fs');
	var array = null;	
	fs.readdir(name, filterFunction);	

}


function filterFunction(args){

}
