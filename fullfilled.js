console.log('start');

let promise = new Promise(resolve => {
    setTimeout(() => {
        console.log('this promise is fullfilled');
        resolve('hello world');
    }, 1000)
});

setTimeout(() => {
    promise.then(value => {
        console.log(value);
    });
}, 3000);

// 对已完成的promise执行then
// 在任何地方生成一个promise后，作为变量传递到其他地方，可追续任意多的then