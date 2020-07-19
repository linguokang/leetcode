/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
    if (!preorder.length) return null
    const root = preorder[0]
    const node = new TreeNode(root)
    const index = inorder.indexOf(root)
    const inorderLeft = inorder.slice(0, index)
    const inorderRight = inorder.slice(index + 1)
    const preorderLeft = preorder.slice(1, index + 1)
    const preorderRight = preorder.slice(index + 1)
    node.left = buildTree(preorderLeft, inorderLeft)
    node.right = buildTree(preorderRight, inorderRight)
    return node
};
