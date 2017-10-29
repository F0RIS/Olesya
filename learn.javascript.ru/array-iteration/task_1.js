var arr = ["Есть", "жизнь", "на", "марсе"];


// standard array sort to count every element length 
var arrLength = [];
for (var i = 0; i < arr.length; i++) {
    arrLength[i] = arr[i].length;
}

var arrLength = arr.map(function (i) {
    return i.length;
});

console.log(arrLength);
process.exit(1);