
setTimeout(() => console.log(1), 0);

new Promise((resolve) => {
    console.log(2);
    resolve();
})

console.log(3);

Promise.resolve().then(() => console.log(4))

