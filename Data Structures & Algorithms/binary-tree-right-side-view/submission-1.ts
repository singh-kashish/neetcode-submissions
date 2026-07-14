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
    rightSideView(root: TreeNode | null): number[] {
        if(root===null)return []
        let dict = [root];
        let res = []
        while(dict.length){
            const n = dict.length;
            for(let i=0;i<n;i++){
                const curr = dict.shift()
                if(i==n-1)res.push(curr.val);
                if(curr.left)dict.push(curr.left);
                if(curr.right)dict.push(curr.right)
            }
        }
        return res;
    }
}
