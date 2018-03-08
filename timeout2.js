console.log('test begin');
new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 2000)
}).then(value => {
    console.log(value)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('world');
        }, 2000)
    })
}).then(value => {
    console.log(value + 'world');
})