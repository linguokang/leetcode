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


function curry(fn, currArgs) {
    return function(){
        let args  = Array.prototype.slice.call(arguments)

        if (currArgs !== undefined) {
            args = args.concat(currArgs);
        }

        if(fn.length > args.length){
            return curry(fn, args)
        }else{
            return fn(...args)
        }
    }
}


function  test(...params) {
    console.log(params)
}
test(12,345,53)


function curry(fn, currArgs) {
    return function (...args) {
        let contactArgs  = args
        if (currArgs !== undefined) {
            contactArgs = [...currArgs, ...args]
        }
        if(contactArgs.length >= fn.length){
            return fn(...contactArgs)
        }else{
            return curry(fn, contactArgs)
        }
    }
}

function sum(a, b, c) {
    console.log(a + b + c);
}

const fn = curry(sum);

fn(1, 2, 3); // 6
fn(1, 2)(3); // 6
fn(1)(2, 3); // 6
fn(1)(2)(3); // 6