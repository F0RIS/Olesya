var arr = [1, -2, 15, 2, 0, 8];

// compare function for sort of numeric = comporator
console.log(arr);
function compare(a, b) {
    console.log( a + ' and ' + b);
	if(a>b) return 1; // return( a-b);
	if(a<b) return -1;
}

arr.sort(compare);

console.log(arr);