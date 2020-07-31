Object.prototype.instanceof = function (origin, target) {
    while (target) {
        if (target.__proto__ == origin.prototype) {
            return true
        }
        target = target.__proto__
    }
    return false
}
