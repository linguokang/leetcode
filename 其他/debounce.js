function debounce(fn, delay = 200) {
    let timer = null
    return function (...rest) {
        let context = this;
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(context, rest)
        }, delay)
    }
}


function throttle(fn, delay = 200) {
    let running = false
    return function (...rest) {
        if (running) return
        running = true
        let context = this;
        setTimeout(() => {
            fn.apply(context, rest)
            running = false
        }, delay)
    }
}
