Array.prototype.unique = function (array) {
    [...new Set(array)]
}

Array.prototype.unique = function (array) {
    const res = array.filter((item, index, array) => {
        return array.indexOf(item) == index
    })
    return res
}


