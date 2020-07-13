/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let L = 0
    let R = nums.length - 1

    while(L <= R){
        let mid = Math.floor((R - L) / 2) + L// 取中间索引
        if(nums[mid] === target) return mid  // 找到了 直接返回

        if(nums[L] > nums[mid]){//增序在右边
            if(target > nums[mid] && target <= nums[R]){
                L = mid + 1
            }else{
                R = mid - 1
            }
        }else{//增序在左边
            if(target >= nums[L] && target < nums[mid]){
                R = mid - 1
            }else{
                L = mid + 1
            }
        }
    }
    return -1
};
