// =============================错误处理=============================
// Promise会自动捕获异常并交给rejected响应函数处理

console.log('start');

new Promise(resolve => {
    setTimeout(() => {
        throw new Error('bye');
    }, 2000)
}).then(value => {
    console.log(value + 'world');
}).catch(error => {
    console.log('Error:', error.message)
})

// 发生错误后，后面的then不会执行，直接执行catch