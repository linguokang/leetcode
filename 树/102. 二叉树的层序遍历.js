/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const q = []
    const result = []
    if (!root) return result;
    q.push(root);
    while (q.length !== 0) {
        const currentLevelSize = q.length;
        result.push([]);
        for (let i = 1; i <= currentLevelSize; ++i) {
            let curr = q.shift()
            result[result.length - 1].push(curr.val);
            console.log(curr)
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
        }
    }
    return result
};
