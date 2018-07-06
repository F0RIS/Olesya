// var ads = 'buy рюкзак';

// function f(length, ads) {

//     var arr = Array.from(Array(length+1).keys());
    
//     for (let i = 1; i < arr.length; i++) {

//         console.log(arr[i], 'operation are going good');

//         if( i % 2 === 0) {
//             showAds(ads);
//         }
//     }
// }

function showAds() {
    console.log('buy рюкзак');   
}

// f(7, ads);


var oldLog = console.log;

console.log = function (...args) {


    if (typeof this.calls == "undefined" ) {
        this.calls = 0;
    }


    // if (!this.hasOwnProperty('calls')) this.calls = 0; 

    this.calls++;

    if(this.calls % 3 === 0) {
        // showAds();
    oldLog('ads');
    }
    oldLog(...args); 
    
}

console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
console.log("5");
