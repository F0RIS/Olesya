function isInt(num) {
    return (num ^ 0) === num;
}

console.log(isInt(5));
console.log(isInt(-0.5));


console.log(isInt(1.5));
