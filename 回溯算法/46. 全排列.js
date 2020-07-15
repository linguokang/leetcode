var permute = function (nums) {
    let result = []
    dfs([], 0)

    function dfs(path) {
        if (path.length == nums.length) {
            result.push(path)
            return
        }
        for (let i = 0; i < nums.length; i++) {
            if (path.includes(nums[i])) continue;
            path.push(nums[i])
            dfs(path.slice())
            path.pop()
        }
    }
    return result
}
