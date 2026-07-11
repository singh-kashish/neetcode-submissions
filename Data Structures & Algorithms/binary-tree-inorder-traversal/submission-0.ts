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
    inorderTraversal(root: TreeNode | null): number[] {
        const res=[];
        const recursion = (node:TreeNode|null):void=>{
            if(!node)return;
            recursion(node.left);
            res.push(node.val);
            recursion(node.right);
        }
        recursion(root);
        return res;
    }
}
