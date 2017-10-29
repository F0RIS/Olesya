var man = {
    name: 'Anton',
    smart: 100,
    strong: 100
}

// if we want work with array of data
var prop = Object.keys(man);
console.log(prop);


// data - key+ value;
for (key in man) {
    console.log(key + ' ' + man[key]);
}

process.exit(1);