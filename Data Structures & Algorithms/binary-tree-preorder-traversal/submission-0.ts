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
     * @return {number[]}
     */
    preorderTraversal(root: TreeNode | null): number[] {
        const res=[];
        function rec(node:TreeNode|null):void{
            if(!node)return;
            res.push(node.val);
            rec(node.left)
            rec(node.right)
        }
        rec(root);
        return res;
    }
}
