console.log('start');

new Promise(resolve => {
    setTimeout(() => {
        resolve();
    }, 1000)
}).then(() => {
    console.log('satrt');
    throw new Error('test error');
}).catch(err => {
    console.log('i catch:', err);
    // 情况二
    throw new  Error('another error')
}).then(() => {
    console.log('arrive here');
}).then(() => {
    console.log('and here');
}).catch(err => {
    console.log('now,i catch:', err);
})


// 第一个catch执行后，后面的then也执行了，但是后面的catch就不会执行了
// 情况二 ，第一个catch后面的then不执行，直接执行catch


// ======================强烈建议给所有的队列最后都加上catch======================