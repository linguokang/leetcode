//方法一：标记法
var detectCycle = function (head) {
    while (head && head.next) {
        if (head.flag) {
            return head
        } else {
            head.flag = 1
            head = head.next
        }
    }
    return null;
}

//方法一：快慢指针
var detectCycle = function (head) {
    let fast = head
    let slow = head
    while (fast) {
        if (fast.next == null) return null
        slow = slow.next
        fast = fast.next.next

        if (slow == fast) {
            fast = head
            while (true) {
                if (fast == slow) {
                    return slow
                }
                fast = fast.next
                slow = slow.next
            }
        }
    }
    return null
}
