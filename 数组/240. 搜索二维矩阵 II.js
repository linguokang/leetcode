var searchMatrix = function (matrix, target) {
    let row = matrix.length
    if (!row) {
        return false
    }
    let col = matrix[0].length

    let i = row - 1
    let j = 0

    while (i >= 0 && j < col) {
        if (matrix[i][j] > target) {
            i--
        }
        if (matrix[i][j] < target) {
            j++
        }
        if (matrix[i][j] == target) {
            return true
        }
    }
    return false
}
