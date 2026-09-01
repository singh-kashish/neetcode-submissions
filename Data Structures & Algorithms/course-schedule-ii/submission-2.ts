class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses: number, prerequisites: number[][]): number[] {
        const visited =  new Set()
        const adj:Array<Array<number>> = Array.from({length:numCourses},()=>[])
        for(const [x,y] of prerequisites){
            adj[y].push(x)
        }
        let i=0;
        const res = []
        const cycle=new Set<number>()
        function dfs(n:number):boolean{
            if(cycle.has(n))return false
            if(visited.has(n))return true
            cycle.add(n)
            for(const x of adj[n]){
                if(!dfs(x))return false
            }
            res.push(n)
            visited.add(n)
            cycle.delete(n)
            return true
        }
        for(let i=0;i<numCourses;i++){
            if(!visited.has(i)){
                if(!dfs(i))return []
            }
        }
        return res.reverse()
    }
}
