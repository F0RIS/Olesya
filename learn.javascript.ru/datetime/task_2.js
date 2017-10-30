// function getWeekDay(date) {
//     // need this array to print result in string format. in another way, recieve number of day from 0
//     var days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    
//       return days[date.getDay()];
// }

// var date = new Date();

// console.log(getWeekDay(date));

// in modern browser
var d = new Date();
console.log(d.toLocaleDateString('en', {weekday: 'long'}));
process.exit(1);