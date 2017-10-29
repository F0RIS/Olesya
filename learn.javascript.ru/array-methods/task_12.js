var vasya = { name: "Вася", age: 23 };
var masha = { name: "Маша", age: 18 };
var vovochka = { name: "Вовочка", age: 6 };

var people = [vasya, masha, vovochka];

// var sortNumber = (a,b) =>  b-a;

people.sort((a, b) => a.age - b.age);

console.log(people);
// теперь people: [vovochka, masha, vasya]
console.log(people[0].age);


process.exit(1);