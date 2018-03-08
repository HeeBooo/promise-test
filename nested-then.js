console.log('start');

// new Promise(resolve => {
//     console.log('step 1');
//     setTimeout(() => {
//         resolve(100);
//     }, 1000);
// }).then(value => {
//     return new Promise(resolve => {
//         console.log('step 1-1');
//         setTimeout(() => {
//             resolve(110);
//         }, 1000)
//     }).then(value => {
//         console.log('step 1-2');
//         return value;
//     }).then(value => {
//         console.log('step 1-3');
//         return value;
//     })
// }).then(value => {
//     console.log(value)
//     console.log('step 2');
// })
// 两种写法是相同的，但尽量写成下面这种链式调用，不要用嵌套，影响阅读性
new Promise(resolve => {
    console.log('step 1');
    setTimeout(() => {
        resolve(100);
    }, 1000);
}).then(value => {
    return new Promise(resolve => {
        console.log('step 1-1');
        setTimeout(() => {
            resolve(110);
        }, 1000)
    })
}).then(value => {
    console.log('step 1-2');
    return value;
}).then(value => {
    console.log('step 1-3');
    return value;
}).then(value => {
    console.log(value)
    console.log('step 2');
})