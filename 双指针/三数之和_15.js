/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//解法一：双指针
var threeSum = function(nums) {
    nums.sort((a,b)=>a-b)
    let sum = 0
    let result = []
    for(let i=0;i<nums.length;i++){
        if(nums[i]>0){
            break
        }
        if(i > 0 && nums[i] == nums[i-1]){
            continue; // 去重
        }
        let left = i+1
        let right = nums.length - 1
        while(left<right){
            sum = nums[i] + nums[left] + nums[right]
            if(sum === 0){
                result.push([nums[i],nums[left],nums[right]])
                while (left<right && nums[left] == nums[left+1]) left++; // 去重
                while (left<right && nums[right] == nums[right-1]) right--; // 去重
                left++
                right--
            }else if(sum>0){
                right--
            }else if(sum<0){
                left++
            }
        }
    }
    return result
}

//解法二：哈希表
var threeSum = function(nums) {
    let length = nums.length
    let result = []
    let map = new Map()
    for(let i=0;i<length-2;i++){
        for(let j=i+1;j<length-1;j++){
            let mark = 0 - nums[i] - nums[j]
            if(map.has(mark)){
                result.push([...map.get(mark),mark])
                map.delete(mark)
            }else{
                map.set(mark,[nums[i],nums[j]])
            }
        }
    }
    return result
};

