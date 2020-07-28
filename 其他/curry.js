function curry(fn) {
    return function revice(...args) {
        if (args.length < fn.length) {
            return (...rest) => {
                return revice(...args, ...rest)
            }
        } else {
            return fn(...args)
        }
    }
}


function multiFn(a, b, c) {
    return a * b * c;
}
var multi = curry(multiFn);
multi(2)(3)(4);
