// Function.prototype.defer = function (ms) {
//     setTimeout(this, ms);    
// }

// function f() {
//     console.log( "привет" );
// }
  
// f.defer(1000); // выведет "привет" через 1 секунду

Function.prototype.defer = function (ms) {
        
    return function (...arg) {       
        console.log(arg);
         
        setTimeout(this, ms, ...arg)
    }.bind(this);
}

function f(a, b) {
    console.log( a + b );
}
  
f.defer(1000)(1, 2);