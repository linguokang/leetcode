/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    var n = grid.length;
    var m = grid[0].length;
    let sum = new Array(n)
    for (let i = 0; i < sum.length; i++) {
        sum[i] = new Array(m).fill(0)
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (i != 0 && j != 0) {
                sum[i][j] = Math.min(sum[i - 1][j], sum[i][j - 1]) + grid[i][j]
            }
            if (i == 0 && j != 0) {
                sum[i][j] = sum[i][j - 1] + grid[i][j]
            }
            if (i != 0 && j == 0) {
                sum[i][j] = sum[i - 1][j] + grid[i][j]
            }
            if (i == 0 && j == 0) {
                sum[i][j] = grid[i][j]
            }

        }
    }

    return sum[n - 1][m - 1]
};
