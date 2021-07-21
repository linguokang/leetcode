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

Function.prototype.myCall = function (context, ...args) {
    const ctx = context || window
    const fn = Symbol(fn)
    ctx[fn] = this
    const res =  context.fn(...args)
    delete context.fn
    return res
}

Function.prototype.mybind = function (context, ...args) {
    const fn = this
    return function() {
        const appleArgs = [...arguments, ...args]
        return fn.apply(context, ...appleArgs)
    }
}

a.myCall(this, args)
a.mybind(this, args)
