var arr = ["воз", "киборг", "корсет", "ЗОВ", "гробик", "костер", "сектор"];
var obj = {}
var result = [];

function aclean(arr) {

    for (var i = 0; i < arr.length; i++) {
        var sorted = arr[i].toLowerCase().split('').sort().join("");

        var key = sorted;
        obj[key] = arr[i];
    }

    for (key in obj) {
        result.push(obj[key]);
    }
    return result;
}

console.log(aclean(arr)); // "воз,киборг,корсет" или "ЗОВ,гробик,сектор"

process.exit(1);