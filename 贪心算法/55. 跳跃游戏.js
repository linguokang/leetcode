var canJump = function(nums) {
    let maxIndex = 0
    for(let i=0;i<nums.length;i++){
        if(maxIndex < i){
            return false
        }
        maxIndex = Math.max(nums[i] + i,maxIndex)
    }
    return maxIndex >= nums.length - 1
}
