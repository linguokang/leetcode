/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const m = grid.length
    if (m === 0) return 0;
    const n = grid[0].length
    let count = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === '1') {
                helper(grid, i, j)
                count++
            }

        }
    }

    function helper(grid, i, j) {
        if (i < 0 || j < 0 || i > m - 1 || j > n - 1 || grid[i][j] === '0')
            return;

        grid[i][j] = '0'

        helper(grid, i + 1, j)
        helper(grid, i - 1, j)
        helper(grid, i, j + 1)
        helper(grid, i, j - 1)
    }
    return count
};
