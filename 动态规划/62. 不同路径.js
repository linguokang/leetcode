/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    var dp = new Array(m)
    for (let i = 0; i < m; i++) {
        dp[i] = new Array(n)
        if (i == 0) {
            dp[i].fill(1)
        } else {
            dp[i].fill(0)
        }
        dp[i][0] = 1
    }

    for (let j = 1; j < m; j++) {
        for (let k = 1; k < n; k++) {
            dp[j][k] = dp[j - 1][k] + dp[j][k - 1]
        }
    }

    return dp[m - 1][n - 1]
};
