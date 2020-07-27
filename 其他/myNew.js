function myNew(func, ...args) {
    const obj = {}
    obj.__proto__ = func.prototype
    const result = func.apply(obj, args);
    return Object.prototype.toString(result) === '[object Object]' ? result : obj
}
