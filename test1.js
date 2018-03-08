// 以下四种Promise的区别是什么
doSomeThing().then(function () {
    return doSomeThingElse();
}).then(finaHandler);
// 先执行doSomeThing，再执行doSomeThingElse，等doSomeThingElse(undefined)执行完后，最后执行finaHandler(resultOfdoSomeThingElse)

doSomeThing().then(function () {
    doSomeThingElse(); // 因为这个promise实例并没有返回给下一个then
}).then(finaHandler);
// 先执行doSomeThing, 然后同时执行doSomeThingElse(undefined)和finaHandler(undefined)

doSomeThing()
    .then(doSomeThingElse()) // 传入了一个执行的函数
    .then(finaHandler);
// doSomeThing和doSomeThingElse(undefined)同时执行，doSomeThing执行完后执行finaHandler(resultOfdoSomeThing)

doSomeThing()
    .then(doSomeThingElse)
    .then(finaHandler);
// 先执行doSomeThing,然后执行doSomeThingElse(resultOfdoSomeThing)，最后执行finaHandler(resultOfdoSomeThingElse)

// 假设是doSomeThing和doSomeThingElse都是一个Promise实例