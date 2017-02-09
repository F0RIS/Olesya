function Animal(name, weight, age) {
	this.className = "Animal";
	this._name = name;
	this._weight = weight;
	this._age = age;
}

Animal.prototype.whoAmI = function () {
// alert("rrrr");
console.log("I am " + this.className );
}

Animal.prototype.jump = function () {}

Animal.prototype.run = function () {}

Animal.prototype.say = function () {
	this.whoAmI();
}

function Rabbit() {
	Animal.apply(this,arguments);
	this.className = "Rabbit";
	
} 

Rabbit.prototype = Object.create(Animal.prototype); //наследуем прототип родителя ( в данном случае методы).
Rabbit.prototype.constructor = Animal;

Rabbit.prototype.multiply = function(){
	console.log("ya-ya-ya");
}

function Lion (){
	Animal.apply(this,arguments); //вызов конструктора родительского класса
	this.className = "Lion";
}

Lion.prototype = Object.create(Animal.prototype);
Lion.prototype.constructor = Animal;

Lion.prototype.say = function () {
	this.whoAmI();
	console.log("And I growl ARRRRRRR " );
}

function Dog () {
	Animal.apply(this, arguments);
	this.className = "Dog";
}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Animal;

Dog.prototype.LickFace = function () {
	console.log("Im lick Anton face ");
}

Dog.prototype.say = function(){
	Animal.prototype.say.apply(this, arguments); //вызов метода родительского класса
	console.log("And I growl gaw " );
}
 
  
new Rabbit("victor", 23, 5).say();
console.log("---------");
new Lion("victor", 23, 5).say();
console.log("---------");
new Dog("viki", 15,2).say();