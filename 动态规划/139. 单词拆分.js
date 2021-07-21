var wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const len = s.length;
  const dp = new Array(len + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i <= len; i++) {
    for (let j = i; j >= 0; j--) {
      const word = s.slice(j, i);
      if (dp[j] == true && wordSet.has(word)) {
        dp[i] = true;
        break;
      }
    }
  }
  return dp[len];
};
