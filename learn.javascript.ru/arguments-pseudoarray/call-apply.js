//  task1
function sumArg() {
   arguments.reduce = [].reduce;
   return arguments.reduce(function(a,b){
        return a + b;
    })
}
function sumArg2() {
    return [].reduce.call(arguments, function(a, b){
        return a + b;
    })
}
//  console.log(sumArg(1,2,3,5));
//  console.log(sumArg2(1,2,3,5));

//  task1

function applyAll(func) {   
    // console.log( arguments, [].slice.call(arguments, 1));
    return func.apply(this, [].slice.call(arguments, 1));
}
console.log(applyAll(sumArg, 1, 2, 5));
