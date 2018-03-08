console.log('test begin');
new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 2000)
}).then(value => {
    console.log(`value is ${value}`)
})