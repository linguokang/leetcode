Function.prototype.myCall = function (context, ...args) {
    const ctx = context || window
    const func = Symbol('func')
    ctx[func] = this

    const result = ctx[func](...args)
    delete ctx[func]
    return result
}

Function.prototype.apply = function (context, args) {
    const ctx = context || window
    const func = Symbol('func')
    ctx[func] = this

    const result = ctx[func](...args)
    delete ctx[func]
    return result
}

Function.prototype.bind = function (context, ...args) {
    const that = this

    function funcBind() {
        const applyArgs = args.concat([...arguments]);
        return that.apply(context, applyArgs);
    }

    return funcBind
}
