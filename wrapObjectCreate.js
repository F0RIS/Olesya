var a = Object.create(null);
a.hasOwn.....

-----------------------

var oldCreate = Object.create;

Object.create = function(...args) {
	var res = oldCreate(args);
	console.log("asd"+args)
	res.myField = 1;
	res.func = function(a){
		console.log(a);
	}
	return res;
	
}

var o = Object.create(null);


var o2 = Object.create2(null);
