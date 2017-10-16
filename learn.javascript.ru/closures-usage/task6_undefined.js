function sayHi() {
	for(var i = 0; i<arguments.length; i++) {
		console.log("смотри "+arguments[i]);
	}
}

sayHi('Антон', 'псевдомасив');


function sayBye() {
	var a = arguments.pop(); //doesnt work - argiments - object with length
}

sayBye(1);
// I liked this task
//what should execute?
var i=0;
setTimeout(function(){
i++;
console.log(++i);
}, 300);
console.log(i++);
