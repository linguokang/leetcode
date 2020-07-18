var inorderTraversal = function(root) {
    let result = []
    function dfs(root){
        if(!root){
            return
        }
        root.left && dfs(root.left)
        result.push(root.val)
        root.right && dfs(root.right)

    }
    dfs(root)
    return result
}
