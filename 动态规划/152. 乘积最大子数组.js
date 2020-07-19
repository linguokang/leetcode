var maxProduct = function (nums) {
    let len = nums.length
    let dpMax = new Array(len)
    let dpMin = new Array(len)
    let res = nums[0]
    dpMax[0] = nums[0]
    dpMin[0] = nums[0]
    for (let i = 1; i < len; i++) {
        let tmp1 = dpMax[i - 1] * nums[i]
        let tmp2 = dpMin[i - 1] * nums[i]
        dpMax[i] = Math.max(tmp1, tmp2, nums[i])
        dpMin[i] = Math.min(tmp1, tmp2, nums[i])
        res = Math.max(dpMax[i], res)
    }
    return res
}
