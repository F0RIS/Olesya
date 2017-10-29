var arr = [5, 3, 8, 1, 2, 4, 6, 9];

// filter of numbers go in diapason 
function filterRangeInPlace(arr, a, b) {

    for (var i = 0; i < arr.length; i++) {

        // defined diapason
        if (arr[i] <= a || arr[i] >= b) {
            console.log('deleted ' + arr[i]);
            // deleted  from position=i 1=className
            arr.splice(i, 1);
            //pos of next element changed(bcs we deleted prev element = -1),
            // but counter isn't => we need to shift it too;
            i--;
        }
    }

    console.log(arr);
}


filterRangeInPlace(arr, 2, 7); //3, 1

//for debug
process.exit(1);