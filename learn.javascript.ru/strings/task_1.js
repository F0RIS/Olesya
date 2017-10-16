function ucFirst(str) {
     return str.charAt(0).toUpperCase().concat(str.slice(1));
}

console.log(ucFirst("вася"));
console.log(ucFirst(""));