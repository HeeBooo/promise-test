// ======================批量执行Promise.all======================
// Promise.all([p1,p2,p3])用于将多个Promise实例，包装成一个新的Promise实例
// 参数是一个数组，数组里可以是Promise对象也可以是别的值，只有Promise会等待状态改变
// 当所有子Promise都完成后，该Promise完成，返回值是全部值的数组
// 有任意一个失败，该Promise失败，返回第一个失败的子Promise的结果

console.log('satrt');

Promise.all([1, 2, 3])
    .then(all => {
        console.log('1:', all);
        return Promise.all([function () {
            console.log('ooxx')
        }, 'ooxx', false])
    })
    .then(all => {
        console.log('2:', all);
        let p1 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I\'m p1');
            }, 1500)
        });
        let p2 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I\'m p2');
            }, 1450)
        });

        return Promise.all([p1, p2]);
    }).then(all => {
        console.log('3:', all);
        let p1 = new Promise(resolve => {
            setTimeout(() => {
                resolve('I\'m p1');
            }, 1500)
        });
        let p2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('I\'m p2');
            }, 1000)
        });
        let p3 = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('I\'m p3');
            }, 3000)
        });

        return Promise.all([p1, p2, p3]);
    }).then(all => {
        console.log('all', all);
    }).catch(err => {
        console.log(err)
    })