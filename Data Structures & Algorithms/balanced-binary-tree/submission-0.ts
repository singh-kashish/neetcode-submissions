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
     * @return {boolean}
     */
    isBalanced(root: TreeNode | null): boolean {
        let balanced = true;
        function getDepth(node:TreeNode|null):number{
            if(!node)return 0;
            const leftDepth = getDepth(node.left);
            const rightDepth = getDepth(node.right);
            if(Math.abs(leftDepth-rightDepth)>1)balanced=false;
            return 1+Math.max(leftDepth,rightDepth)
        }
        getDepth(root);
        return balanced;
    }
}
