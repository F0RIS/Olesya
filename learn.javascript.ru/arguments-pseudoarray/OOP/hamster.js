class Hamster {
    constructor () {
        this.food = [];
    }
}

Hamster.prototype.found = function (smth) {
    return this.food.push(smth);
}

var first = new Hamster();
var sec = new Hamster();

first.found('apple');
first.found('orange');

console.log(first.food.length);
console.log(sec.food.length);