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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root===null)return [];
        let res=[];
        let t = [];
        t.push(root);
        while(t.length){
            const n = t.length;
            let temp=[];
            for(let i=0;i<n;i++){
                let x = t.shift();
                if(x.left)t.push(x.left);
                if(x.right)t.push(x.right);
                temp.push(x.val);
            }
            res.push(temp);
        }
        return res;
    }
}
