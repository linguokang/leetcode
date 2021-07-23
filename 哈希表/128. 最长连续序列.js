var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }
  let set = new Set(nums);
  let maxlong = 1;
  let curlong = 1;
  for (num of nums) {
    if (!set.has(num - 1)) {
      curlong = 1;
      let curnum = num;
      while (set.has(curnum + 1)) {
        curlong++;
        curnum++;
      }
      maxlong = Math.max(maxlong, curlong);
    }
  }
  return maxlong;
};
