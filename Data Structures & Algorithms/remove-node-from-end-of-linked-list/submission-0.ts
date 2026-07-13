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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head: ListNode | null, n: number): ListNode {
        let dummy = new ListNode(-1,head);
        let ptr = head;
        let len = 0;
        while(ptr){
            len++;
            ptr=ptr.next;
        }
        ptr = dummy;
        while(len-n && ptr.next){
            n++;
            ptr = ptr.next;
        }
        if(ptr && ptr.next){
            const next = ptr.next;
            ptr.next = next?next.next:next;
        }
        return dummy.next;

    }
}
