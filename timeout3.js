console.log('start');

new Promise(resolve => {
    setTimeout(() => {
        resolve('hello');
    }, 2000)
}).then(value => {
    console.log(value);
    console.log('everyone');
    (function () {
        return new Promise(resolve => {
            setTimeout(() => {
                console.log('Mr.H')
                resolve('is happy')
            }, 2000)
        })
    }());
    // return false;
}).then(value => {
    console.log(value + 'world')
})

// 因为立刻执行函数是在then里面，不是promise里面，所以继续执行下一个then， 
// 第一个then中value变为false了，而且fasle不会影响，会继续传递到下一步，2s后执行第一个then里面的
// then里面没有明确返回值的时候，相当于return了undefined,会将undefined传递到下一个then