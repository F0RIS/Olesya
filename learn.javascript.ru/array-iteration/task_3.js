var arr = [1,2,3,4,5];

 function getSums(arr) {
   var result = [];
   var newArr = arr.reduce(function(sum, curItem) {
        result.push(sum);
        return sum + curItem;
    });

    result.push(newArr);
    return result;
}

// getSums( arr ) = [ 1, 1+2, 1+2+3, 1+2+3+4, 1+2+3+4+5 ] = [ 1, 3, 6, 10, 15 ]
console.log(arr);
console.log(getSums(arr));

process.exit(1);