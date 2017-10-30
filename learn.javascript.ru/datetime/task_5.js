function getLastDayOfMonth(year, month) {
    // crated date of next month, 0 - means preveous day
    var d = new Date(year, month + 1, 0);
    return d.getDate();
}

console.log(getLastDayOfMonth(2017, 1));