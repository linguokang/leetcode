Promise.myall = function (arr) {
    return new Promise((resolve, reject) => {
        const result = []
        const len = arr.length
        let count = 0
        if (!len) {
            resolve(result)
            return
        }
        arr.forEach((item, i) => {
            item.then((resp) => {
                result[i] = resp
                count++
                if (count == len) {
                    resolve(result)
                }
            }, err => {
                reject(err)
            })
        });
    })
}

Promise.myrace = function (arr) {
    return new Promise((resolve, reject) => {
        const result = []
        const len = arr.length
        if (!len) {
            resolve(result)
            return
        }
        arr.forEach(item => {
            item.then((resp) => {
                result.push(resp)
                resolve(result)
            }, err => {
                reject(err)
            })
        })
    })
}

// 测试用例
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(11)
    }, 2000);
});
let p2 = new Promise((resolve, reject) => {
    reject('asfs')

});
let p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(33);
    }, 4);
});

Promise.myall([p3, p1]).then(data => {
    // 按传入数组的顺序打印
    console.log(data); // [3, 1, 2]
}, err => {
    console.log(err)
});

Promise.myrace([p1, p2, p3]).then(data => {
    // 谁快就是谁
    console.log(data); // 2
}, err => {
    console.log('失败跑的最快')
})
