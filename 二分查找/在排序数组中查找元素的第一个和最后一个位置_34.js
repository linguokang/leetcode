var searchRange = function (nums, target) {
    let start = 0
    let end = nums.length - 1
    let result = -1
    while (start <= end) {
        var mid = Math.floor((end - start) / 2) + start;
        if (nums[mid] < target) {
            start = mid + 1
        } else if (nums[mid] > target) {
            end = mid - 1
        } else {
            result = mid
            break
        }
    }
    if (result != -1) {
        let left = result
        let right = result

        while (nums[left] == nums[result]) {
            left--
        }
        while (nums[right] == nums[result]) {
            right++
        }
        return [left + 1, right - 1]
    } else {
        return [-1, -1]
    }
};
