//解法一：动态规划

var longestPalindrome = function(s) {
    const n = s.length
    const dp = Array.from(new Array(n),()=>new Array(n).fill(0))
    let res = ''

    for(let i=n-1;i>=0;i--){
        for(let j=i;j<n;j++){
            dp[i][j] = s[i] == s[j] && (j-i < 2 || dp[i+1][j-1])
            if(dp[i][j] && j - i +1 > res.length){
                res = s.substring(i,j+1);
            }
        }
    }
    return res
}

//解法二：中心扩展法
var longestPalindrome = function(s) {
    if(!s || s.length < 2){
        return s;
    }
    let start = 0,end = 0;
    let n = s.length;
    // 中心扩展法
    let centerExpend = (left,right) => {
        while(left >= 0 && right < n && s[left] == s[right]){
            left--;
            right++;
        }
        return right - left - 1;
    }
    for(let i = 0;i < n;i++){
        let len1 = centerExpend(i,i);
        let len2 = centerExpend(i,i+1);
        // 两种组合取最大回文串的长度
        let maxLen = Math.max(len1,len2);
        if(maxLen > end - start){
            // 更新最大回文串的首尾字符索引
            start = i - ((maxLen - 1) >> 1);
            end = i + (maxLen >> 1);
        }
    }
    return s.substring(start,end+1);
};
