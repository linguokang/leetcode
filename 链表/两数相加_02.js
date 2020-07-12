/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    let carry = 0
    let sum = 0
    let newList = new ListNode(-1)
    let temp = newList
    while(l1 || l2){
        const n1 = l1 ? l1.val : 0
        const n2 = l2 ? l2.val : 0
        sum = n1 + n2 + carry
        carry = Math.floor(sum / 10)
        // 这一步很关键
        // 把当前暂存链表 新建 ListNode val为 sum % 10 的结果
        // 这一步做完之后
        // 第一次 之后 res = {val: 'xx', next: {val: sum % 10, next:null } }
        temp.next = new ListNode(sum % 10)
        // 同时改变 temp 指向为新建 链表
        temp = temp.next
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)
    }
    if( carry > 0 ) temp.next = new ListNode(carry)
    return newList.next
}
