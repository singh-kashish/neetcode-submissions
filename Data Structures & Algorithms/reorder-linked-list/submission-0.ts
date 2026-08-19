/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head: ListNode | null): void {
        if(!head)return;
        let slow : ListNode | null  = head, fast: ListNode | null  = head;
        while(fast && fast.next && fast.next.next){
            slow = slow.next!
            fast = fast.next.next
        }
        {/* Slow's next is middle of the list at this point */}
            let prev: ListNode | null  = null, curr: ListNode | null =slow.next, next: ListNode | null ;
            while(curr){
                next = curr.next;
                curr.next = prev;
                prev = curr
                curr = next;
            }
            slow.next = null;
            {/** prev points to start of reversed 2nd half now */}
            let left: ListNode | null  = head, right: ListNode | null  = prev;
        while(left && right){
            let leftNext = left.next;
            let rightNext = right.next
            left.next = right;
            right.next = leftNext;
            left = leftNext
            right = rightNext
        }
        return
    }
}
