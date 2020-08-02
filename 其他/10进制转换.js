function Conver(number, base = 2) {
    let rem
    let result = ''

    while (number > base) {
        rem = number % base
        number = Math.floor(number / base)
        result = `${rem}${result}`
    }
    return `1${result}`
}
Conver(16, 2)
