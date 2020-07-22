/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const len = nums.length
    const leftArr = []
    const rightArr = []

    leftArr[0] = 1
    rightArr[len - 1] = 1
    const result = new Array(len).fill(1)
    for (let i = 1; i < len; i++) {
        leftArr[i] = leftArr[i - 1] * nums[i - 1] // 累乘一项即可

    }
    for (let j = len - 2; j >= 0; j--) {
        rightArr[j] = rightArr[j + 1] * nums[j + 1] // 累乘一项即可

    }
    for (let k = 0; k < len; k++) {
        result[k] = leftArr[k] * rightArr[k]
    }

    return result
};
