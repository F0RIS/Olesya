// checking if u need to find element in string collection
// instead of IndexOf, which is slow for array;

var obj = {};

var items = ['div', 'a', 'form'];

for (var i = 0; i < items.length; i++) {
    var key = items[i];
    obj[key] = true;

    if (obj[key]) {
        console.log('find');
    }
}


