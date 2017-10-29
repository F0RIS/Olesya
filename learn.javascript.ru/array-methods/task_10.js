var arr = [5, 2, 1, -10, 8];

//revert sort 
function sortNumber(a, b) {
    return b - a;
}

arr.sort(sortNumber);

console.log(arr);
