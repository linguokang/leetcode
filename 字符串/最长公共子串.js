var longestCommonSubsequence = function(text1, text2) {
    const len1 = text1.length
    const len2 = text2.length
    const dp = new Array(len1)
    let max = 0

    for(let i=0;i<len1;i++){
        dp[i] = new Array(len2).fill(0)
    }
    console.log(dp)

    for(let m=0;m<len1;m++){
        for(let n=0;n<len2;n++){
            if (s1[i - 1] === s2[j - 1]) {
                dp[m][n] = dp[m-1][n-1] + 1
                max = Math.max(max, dp[m][n])
            }
        }
    }
}

longestCommonSubsequence('abcde', 'ace');