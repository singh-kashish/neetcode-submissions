class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adjList:number[][] =  Array.from({length:numCourses},()=>[]);
        for(const [y,x] of prerequisites){
            adjList[x].push(y)
        }
        const cycle = new Set<number>();
        const visited = new Set<number>()
        function dfs(n){
            if(cycle.has(n))return false;
            //if(adjList[n].length==0)return true;
            if(visited.has(n))return true;
            cycle.add(n);
            for(const i of adjList[n]){
                if(!dfs(i))return false
            }
            cycle.delete(n)
            visited.add(n)
            //adjList[n]=[]
            return true;
        }
        for(let i=0;i<numCourses;i++){
            if(!dfs(i))return false;
        }
        return true;
    }
}
 