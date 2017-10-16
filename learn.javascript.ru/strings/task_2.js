console.log(checkSpam('buy ViAgRA now') == true);
console.log(checkSpam('free xxxxx') == true);
console.log(checkSpam("innocent rabbit") == false);

function checkSpam(str) {
    var i;
    var a = ['viagra', 'xxx', 'porno'];
    for (i = 0; i < a.length; i++) {
        if (~str.toLowerCase().indexOf(a[i])) {
            return true;
        }
    }
    return false;
}