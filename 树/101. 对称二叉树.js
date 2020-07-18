/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    function dfs(left, right) {
        if (!left && !right) {
            return true
        }
        if (left && right) {
            if (left.val == right.val) {
                return dfs(left.left, right.right) && dfs(left.right, right.left)
            }
        }
        return false

    }
    return !root || dfs(root.left, root.right)
};
