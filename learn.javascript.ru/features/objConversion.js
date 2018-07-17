function sum(a) {
var cur = a;

    function f(b){
        cur += b;
        return f;
    }

    f.valueOf = function () {
        console.log('valueOf');
        
        return cur;
    }
    // or

    f.toString = function () {
        console.log('toSting');
        return cur;
    }

    return f;
}

var a = sum(1) ;

console.log(+a); // 1 + 2
console.log(sum(1)(2) == 3); // 1 + 2
console.log(sum(1)(2)(3) == 6); // 1 + 2 + 3
console.log(sum(5)(-1)(2) == 6);
// sum(6)(-1)(-2)(-3) == 0
// sum(0)(1)(2)(3)(4)(5) == 15