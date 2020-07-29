Array.prototype.myReduce = function (fn, initialValue) {
    let result
    let array = this
    if (initialValue) {
        result = initialValue
    } else {
        result = array[0]
        array.splice(0, 1)
    }
    array.forEach((item) => {
        result = fn(result, item)
    })
    return result
}


const array1 = [1, 2, 3, 4];
const test = array1.myReduce((accumulator, currentValue) => accumulator + currentValue)
console.log(test)
