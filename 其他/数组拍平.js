const flatten1 = arr => {
    const result = []
    const helper = (arr) => {
        arr.forEach(item => {
            if (Array.isArray(item)) {
                helper(item)
            } else {
                result.push(item)
            }
        });
    }
    helper(arr)

    return result
}

const test = [
    [1, 2],
    [3, [5, 6]]
]
const res = flatten1(test)
console.log(res)
