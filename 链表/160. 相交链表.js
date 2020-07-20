//方法一：标记法
var getIntersectionNode = function (headA, headB) {
    while (headA) {
        headA.flag = true
        headA = headA.next
    }

    while (headB) {
        if (headB.flag) {
            return headB
        }
        headB = headB.next
    }
    return null
};

//方法一：双指针
var getIntersectionNode = function (headA, headB) {
    let pA = headA
    let pB = headB
    while (pA || pB) {
        if (pA == pB) {
            return pA
        }
        pA = pA == null ? headB : pA.next
        pB = pB == null ? headA : pB.next
    }
}
