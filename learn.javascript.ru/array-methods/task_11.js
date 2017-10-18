var arr = [ "don't", "Anton", "get angry"];
var arrSorted;

function sortArr() {
    // arrSorted = arr.concat().sort();
    // or
    arrSorted = arr.slice().sort();
}

sortArr();

console.log(arrSorted);
console.log(arr);

process.exit(1);