console.log('start');

new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('bye')
    }, 2000);
}).then(value => {
    console.log(value + 'world')
}, value => {
    console.log('Error:', value);
});

// 推荐使用第一种方式error.js，清晰好读，并可以捕获前面then的错误