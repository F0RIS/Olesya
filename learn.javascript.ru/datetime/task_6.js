
function getSecondsToday() {
    var now = new Date();
    
    var today = new Date();
    today.setHours(0,0,0,0);
    
    return (now - today)/1000;
}

// alternative solving //

// function getSecondsToday() {
//     var d = new Date();
//     return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
//   };

console.log(getSecondsToday()); // (3600 * 10)

process.exit(1);