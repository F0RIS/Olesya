// Example of wrapping some function 
var a = Object.create(null);
// a.hasOwn.....

// -----------------------

var oldCreate = Object.create;

Object.create2 = function(...args) {
	var res = oldCreate(args);
	console.log("create2 invoked");
	res.myField = 1;
	res.someFunc = function(){
		console.log("someFunc");
	}
	return res;
	
}

var o = Object.create(null);
var o2 = Object.create2(null);

// o.someFunc(); -- not exist


o2.someFunc();
console.log("o2.myField = " + o2.myField);

