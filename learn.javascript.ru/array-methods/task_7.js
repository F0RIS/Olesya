function camelize(str) {
    // divided string to arr by '-' - dash
    var ar = str.split('-');
    for (var i = 1; i < ar.length; i++) {
        // taked first letter and Up it and wtore remaining letters
        ar[i] = ar[i].charAt(0).toUpperCase() + ar[i].slice(1);
    }

    // maked string again 
    return ar.join('');


}

console.log(camelize("background-color"));
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");