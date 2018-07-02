
var number = { val: 3 };
var number2 = 3;

// передача ссылки на объект
function addTwo(numb) {
    numb.val += 2;
}

// передача только значения
function addTwo2(numb) {
    numb += 2;
}

addTwo(number);
addTwo2(number2);

console.log(number.val);
console.log(number2);

/*
OUTPUT:
5
3
*/
