/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node)return node;
        const visited = new Map();
        const dfs = (root) => {
            if(!root)return;
            if(visited.has(root))return visited.get(root);
            let duplicate = new Node(root.val);
            visited.set(root,duplicate);
            for(const n of root.neighbors){
                duplicate.neighbors.push(dfs(n));
            }
            return duplicate;    
        }
        return dfs(node);
    }
}
