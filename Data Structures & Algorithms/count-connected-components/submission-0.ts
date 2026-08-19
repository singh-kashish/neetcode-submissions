class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n: number, edges: number[][]): number {
        let total = 0;
        const adj = new Map<number,number[]>()
        const used = new Array(n).fill(false)
        for(const [x,y] of edges){
            if(!adj.has(x))adj.set(x,[]);
            if(!adj.has(y))adj.set(y,[])
            adj.get(x)!.push(y)
            adj.get(y)!.push(x)
        }
        function dfs(i):void{
            if(i>=n || i<0 || used[i])return;
            used[i]=true;
            const neighbors = adj.get(i) || []
            for(const x of neighbors){
                dfs(x);
            }
            return
        }
        for(let i=0;i<n;i++){
            if(!used[i]){
                dfs(i)
                total++
            }
        }
        return total;
    }
}
