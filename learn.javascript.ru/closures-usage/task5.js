/* .. ваш код для filter, inBetween, inArray */
function filter(arr, func){
    var res = [];
    arr.forEach(function(element) {
        if (func(element)) {
            res.push(element);
        }
    });
    
    return res;

}



var arr = [1, 2, 3, 4, 5, 6, 7,8,9,10];

// console.log(filter(arr, function(a) {
//   return a %  3 == 0
// })); // 2,4,6



 console.log( filter(arr, inBetween(3, 6)) ); // 3,4,5,6
 console.log( filter(arr, inArray([1,2,3])) ); // 3,4,5,6

// console.log( filter(arr, function (item) {
//         return (item >= 3 && item <= 6);
//     })); // 3,4,5,6

function inBetween(a,b) {
    return function (item) {
        return (item >= 3 && item <= 6);
    }
}


function inArray(arr){
    return function(item) {
        return (arr.indexOf(item) != -1);
 }
}
