function compose(...args) {
    const len = args.length
    let count = len - 1

    function f1(...rest) {
        const curryFunc = args[count]

        const result = curryFunc(...rest)
        if (count <= 0) {
            return result
        }
        count--
        return f1(result)

    }

    return f1
}



var greeting = (firstName, lastName) => "hello, " + firstName + " " + lastName;
var toUpper = str => str.toUpperCase();
var fn = compose(toUpper, greeting);
console.log(fn("Jack", "Smith"));
