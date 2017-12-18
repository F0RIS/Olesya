
function getSecondsToday() {
    var now = new Date();

    var today = new Date();
    today.setHours(0,0,0,0);
    
    return Math.floor((now - today)/1000);
}

// alternative solving //

// function getSecondsToday() {
//     var d = new Date();
//     return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
//   };




function getSecToTomorrow() {
    var now = new Date();
    var tomorrow = new Date();
    tomorrow.setDate(now.getDate()+1);
    console.log(tomorrow);
    return Math.floor((tomorrow - now)/1000);

}
console.log(getSecToTomorrow());
// console.log("Seconds have passed today is " + getSecondsToday()); // (3600 * 10)
process.exit(1);