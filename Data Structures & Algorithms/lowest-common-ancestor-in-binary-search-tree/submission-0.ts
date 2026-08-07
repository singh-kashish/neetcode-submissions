/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(
        root: TreeNode | null,
        p: TreeNode | null,
        q: TreeNode | null,
    ) {
        let cur = root;
        const value = (node)=>node.val
        while(cur){
            if(value(cur)<value(p) && value(cur)<value(q))cur=cur.right
            else if(value(cur)>value(p) && value(cur)>value(q))cur=cur.left
            else return cur;
        }
    }
}
