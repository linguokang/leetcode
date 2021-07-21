var longestCommonSubsequence = function(text1, text2) {
  const len1 = text1.length;
  const len2 = text2.length;

  const dp = new Array(len1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(len2).fill(0);
  }

  for (let i = 0; i < len1; i++) {
    for (let j = 0; j < len2; j++) {
      if (text1[i] === text2[j]) {
        if (i - 1 < 0 || j - 1 < 0) {
          dp[i][j] = 1;
        } else {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        }
      } else {
        if (i - 1 < 0 || j - 1 < 0) {
          if (i - 1 < 0 && j - 1 < 0) {
            dp[i][j] = 0;
          } else if (i - 1 < 0) {
            dp[i][j] = dp[i][j - 1];
          } else if (j - 1 < 0) {
            dp[i][j] = dp[i - 1][j];
          }
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }
  }

  return dp[len1 -1 ][len2 -1];
};

longestCommonSubsequence('abcde', 'ace');

// 穷举出所有可能的结果都不容易，而动态规划算法做的就是穷举 + 剪枝
// 涉及子序列问题，十有八九都需要动态规划来解决
