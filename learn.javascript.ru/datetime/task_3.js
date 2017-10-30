var d = new  Date(2012, 0, 3);

 
console.log(d.toLocaleString("ru", {weekday: 'short'}));

function getLocalDate(d) {
   
    day = d.getDay();

    if(day == 0) 
        day = 7;

        return day;
}

console.log(getLocalDate(d));


process.exit(1);