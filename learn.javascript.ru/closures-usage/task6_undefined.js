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