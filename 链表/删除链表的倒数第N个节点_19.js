/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let pre = new ListNode(-1)
    pre.next = head
    let fast = pre
    let slow = pre

    while (n--) {
        fast = fast.next
    }

    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return pre.next
};
