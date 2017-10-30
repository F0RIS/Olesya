var arr = [];
// filling array;
for (var i = 0; i < 100; i++) arr[i] = 0;

// moving on arr
function walklength(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}

// moving on arr
function walkIn(arr) {
    for (var key in arr) arr[key]++;
}

// comparing time of execute
function bench(f) {
    var date = new Date();
    for (var i = 0; i < 100; i++) {
        f(arr)
    }
    return new Date - date;
}

// making acts 100 times for clean result
var timeIn = 0,
    timeLength = 0;
for (var i = 0; i < 100; i++) {
    timeIn += bench(walkIn);
    timeLength += bench(walklength);
}

console.log('Время выполнения walkIn: ' + timeIn/1000);
console.log('Время выполнения walklength: ' + timeLength/1000);

process.exit(1);