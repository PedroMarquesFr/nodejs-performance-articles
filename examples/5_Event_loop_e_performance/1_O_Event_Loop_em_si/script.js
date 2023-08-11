console.log('Start');

setTimeout(() => {
    console.log('setTimeout');
}, 0);

setImmediate(() => {
    console.log('setImmediate');
});

Promise.resolve().then(() => {
    console.log('Promise');
});

console.log('End');
