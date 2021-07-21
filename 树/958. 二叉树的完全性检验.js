var isCompleteTree = function(root) {
     const queue = [{node: root, index: 1}]
    let count = 1

    while(queue.length){
        const cur = queue.shift()
        const index = cur.index
        const node = cur.node

        if(index !== count++){
            return false
        }

        node.left && queue.push({node: node.left, index: index * 2})
        node.right && queue.push({node: node.right, index: index * 2 + 1})
    }
    return true
};