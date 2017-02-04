function Animal(xp, nameAnimal, f, resistance) {
	this.xp = xp;
	this.nameAnimal = nameAnimal;
	this.f = f;
	this.resistance = resistance;
}


function FRand (max, min, x) {
	rand = Math.round(Math.random()*(max-min)+x);
	return rand;
}


 //dont hiss - I want train to use timer
var timer = setInterval(function() {
	 console.log("be ready");
	}, 1000);
 

setTimeout(function() {
clearInterval(timer);
console.log("go");
}, 4000);


Animal.prototype.fight = function () {
 var Feasy = FRand(10, 1, 0);
 var Fmiddle = FRand(50, 10, 10);
 var Fkill = FRand(100, 50, 50);
 
 console.log(this.nameAnimal + this.xp +"fight" + Fkill); //  в будущем тут этого не будет. все будет в resist
}

// here should be all my computing
Animal.prototype.resist = function() {
	
	  // console.log(this.xp + " " + this.nameAnimal + " attacted you." );
	var choiceAnimal = Number(confirm("choose Animal: 0 - Snake, 1 - Ratatu "));
	
	for(;;) {
		
		switch(choiceAnimal){
			case 0:
			
		}
	}
}


function Snake() {
	Animal.apply(this,arguments);
}
Snake.prototype = Object.create(Animal.prototype);
Snake.prototype.constructor = Animal;
 

 function Ratatu() {
	Animal.apply(this,arguments);
}
Ratatu.prototype = Object.create(Animal.prototype);
Ratatu.prototype.constructor = Animal;



//new Snake(100, "egor", 78, 40).fight();
new Ratatu(100, "diksy", 98, 20).fight();

