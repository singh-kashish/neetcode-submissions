class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses: number, prerequisites: number[][]): boolean {
        const adjList:number[][] =  Array.from({length:numCourses},()=>[]);
        for(const [x,y] of prerequisites){
            adjList[x].push(y)
        }
        const visiting = new Set<number>();
        function dfs(n){
            if(visiting.has(n))return false;
            if(adjList[n].length==0)return true;
            
            visiting.add(n);
            for(const i of adjList[n]){
                if(!dfs(i))return false
            }
            visiting.delete(n)
            adjList[n]=[]
            return true;
        }
        for(let i=0;i<numCourses;i++){
            if(!dfs(i))return false;
        }
        return true;
    }
}
 