function camelize (str) {
    var ar = str.split('-');
    for( var i = 1; i<ar.length; i++) {
        ar[i] = ar[i].charAt(0).toUpperCase() + ar[i].slice(1);
    }
   return ar.join('');


}

console.log(camelize("background-color") == 'backgroundColor');
console.log(camelize("list-style-image") == 'listStyleImage');
console.log(camelize("-webkit-transition") == 'WebkitTransition');

// camelize("background-color");
// camelize("list-style-image");
// camelize("-webkit-transition");