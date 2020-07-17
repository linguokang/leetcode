var exist = function (board, word) {
    board[-1] = []
    board.push([])

    let n = board.length
    let m = board[0].length
    let tmpPath = []
    let result = false
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === word.charAt(0)) {
                bracktrack(tmpPath.slice(), i, j)
            }
        }
    }

    function bracktrack(tmpPath, n, m) {

        if (tmpPath.length == word.length) {
            result = true
        }
        if (word.charAt(tmpPath.length) === board[n][m]) {
            tmpPath.push(board[n][m])
            let tmp = board[n][m]
            board[n][m] = 0

            bracktrack(tmpPath.slice(), n + 1, m)
            bracktrack(tmpPath.slice(), n - 1, m)
            bracktrack(tmpPath.slice(), n, m + 1)
            bracktrack(tmpPath.slice(), n, m - 1)

            board[n][m] = tmp
        }

    }
    return result
}
