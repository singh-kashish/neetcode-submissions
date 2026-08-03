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
     * @return {number}
     */
    goodNodes(root: TreeNode | null): number {
        let res = 1;
        const dfs = (node,maxValAbove):void =>{
            if(!node)return;
            if(node.val>=maxValAbove)res++;
            maxValAbove = Math.max(maxValAbove, node.val)
            dfs(node.left,maxValAbove)
            dfs(node.right,maxValAbove)
        }
        dfs(root.left,root.val);
        dfs(root.right,root.val);
        return res;
    }
}
