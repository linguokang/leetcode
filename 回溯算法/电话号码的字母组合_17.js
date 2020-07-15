var letterCombinations = function (digits) {
    const obj = {
        '2': ['a', 'b', 'c'],
        '3': ['d', 'e', 'f'],
        '4': ['g', 'h', 'i'],
        '5': ['j', 'k', 'l'],
        '6': ['m', 'n', 'o'],
        '7': ['p', 'q', 'r', 's'],
        '8': ['t', 'u', 'v'],
        '9': ['w', 'x', 'y', 'z']
    }
    if (!digits) {
        return [];
    }
    let result = []

    function helper(i, path) {
        if (i == digits.length) {
            result.push(path)
            return
        }
        let val = digits.charAt(i)
        for (let j = 0; j < obj[val].length; j++) {
            helper(i + 1, path + obj[val][j])
        }
    }
    helper(0, '')
    return result
}
