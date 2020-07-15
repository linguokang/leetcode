/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let maxVal = 2
    let bucket = new Array(maxVal + 1).fill(0)
    let sortedI = 0;

    for (let i = 0; i < nums.length; i++) {
        bucket[nums[i]]++
    }
    for (let j = 0; j < bucket.length; j++) {
        while (bucket[j] > 0) {
            nums[sortedI++] = j;
            bucket[j]--
        }
    }
};
