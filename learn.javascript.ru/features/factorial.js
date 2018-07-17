// function f(n) {
//     return n ? n * f(n-1) : 1;
// }

// var g = f;
// f = null;
// // error of execute, function call by her prev name (f), but this function does not exist
// g(5); 


var f = function f(n) {
    return n ? n * f(n-1) : 1;
}

var g = f; // link to function
f = null;
// works fine
console.log(g(5)); 