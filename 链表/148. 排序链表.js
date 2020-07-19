/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    let mergeList = (left, right) => {
        let res = new ListNode(-1)
        let pre = res
        while (left && right) {
            if (left.val < right.val) {
                pre.next = left
                left = left.next
            } else {
                pre.next = right
                right = right.next
            }
            pre = pre.next
        }
        pre.next = left ? left : right;
        return res.next;
    }
    let mergeSort = (node) => {
        if (!node || !node.next) return node;
        let mid = node
        let fast = node.next
        while (fast && fast.next) {
            fast = fast.next.next
            mid = mid.next
        }
        let rightList = mid.next
        mid.next = null
        let leftList = node
        return mergeList(mergeSort(leftList), mergeSort(rightList))
    }
    return mergeSort(head);
};
