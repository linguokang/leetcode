var sortedArrayToBST = function (nums) {
  if (!nums.length) return null;

  let mid = Math.floor(nums.length / 2);
  let root = nums[mid];
  let tree = new TreeNode(root);
  let arrleft = nums.slice(0, mid);
  let arrright = nums.slice(mid + 1);
  tree.left = sortedArrayToBST(arrleft);
  tree.right = sortedArrayToBST(arrright);
  return tree;
};
