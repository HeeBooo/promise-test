console.log('start');

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('bye')
    });
}).then(value => {
    console.log(value + 'world')
}, value => {
    console.log('Error:', value);
});