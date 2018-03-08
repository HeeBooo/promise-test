// .then() 接受两个函数作为参数，分别代表fullfilled和rejected
// .then() 会返回一个新的Promise实例，所以可以链式调用
// 如果then中返回了新的Promise，那么下一级的then会在新的Promise状态改变后执行
// 如果返回其他任何值，则会立刻执行下一级then


// ===============================then中还有then的情况===============================
// then返回的还是Promise实例
// 会等里面的then执行完，在执行外面的