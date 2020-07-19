/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root){
        return null
    }
    const stack = []
    while(root.left || root.right || stack.length>0){
        if(root.right){
            stack.push(root.right)
        }
        if(root.left){
            root.right = root.left
            root.left = null
        }else{
            root.right = stack.pop()
        }
        root = root.right
    }
};
