function sum() {
    // should define variable for future sum;
    var sum = 0;

    for (var i = 0; i < arguments.length; i++) {
        // sum all arguments 
        // syntax sum =+ arguments -  concat to string
        sum += arguments[i];
    }
    console.log(sum);
    // return sum;
    // console.log(args);

}

// sum()
// sum(1)
// sum(1, 2)
sum(2, 2)
// sum(1, 2, 3)
// sum(1, 2, 3, 4)