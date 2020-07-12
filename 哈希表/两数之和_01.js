/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for(let i=0;i<nums.length;i++){
        const currNum = nums[i]
        const currNumIndex = i
        const targetNum  = target - currNum
        if(map.has(currNum)){
            const targetNumIndex = map.get(currNum)
            return [targetNumIndex,currNumIndex]
        }else{
            map.set(targetNum ,currNumIndex)
        }
    }
};
