var generate = function (numRows) {
  const dp = new Array(numRows);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(i);
  }

  for (let i = 0; i < dp.length; i++) {
    dp[i][0] = 1;
    dp[i][i] = 1;
  }

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j <= i - 1; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
    }
  }

  return dp;
};
