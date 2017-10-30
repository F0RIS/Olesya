'use strict';
// checking for arguments exist
function f(x) {
    console.log(arguments.length ? 1 : 0);
}

f('s'); // 1
f(); //0

process.exit(1);