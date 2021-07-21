var removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    let i = 0
    let j = 1
    for(let n = 0;n<nums.length;n++){
        if(nums[i] !== nums[j]){
            nums[i] = nums[j]
            i++
        }
        j++
    }
    return i + 1
}
