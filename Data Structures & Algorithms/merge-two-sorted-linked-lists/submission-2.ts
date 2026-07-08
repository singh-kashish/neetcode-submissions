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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if(!list1)return list2;
        if(!list2)return list1;
        let start = new ListNode();
        let p1 = list1, p2=list2, curr=start;
        while(p1!==null && p2!==null){
            if(p1.val<=p2.val){
                curr.next = p1;
                p1=p1.next;
            } else{
                curr.next = p2;
                p2=p2.next
            }
            curr = curr.next
        }
        if(p1!==null){
            curr.next = p1;
        }
        if(p2!==null){
            curr.next = p2;
        }
        return start.next;
    }
}
