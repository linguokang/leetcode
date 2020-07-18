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
var isValidBST = function (root) {
    let result = true
    let pre = -Infinity

    function dfs(root) {
        if (!root) {
            return
        }
        root.left && dfs(root.left)
        if (root.val <= pre) {
            result = false
        } else {
            pre = root.val
        }
        root.right && dfs(root.right)
    }
    dfs(root)
    return result
};
