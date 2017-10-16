console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) == "Вот, что мне хоте...");
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));

console.log(truncate("Всем привет!", 20) == "Всем привет!");


function truncate(str, len) {
    if(str.length > len) {
        return str.slice(str, len-3).concat('...');
    }
    return str;
}


// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }