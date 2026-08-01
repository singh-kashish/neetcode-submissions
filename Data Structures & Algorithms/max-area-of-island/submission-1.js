class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    maxAreaOfIsland(grid) {
        let maxArea=0;
        const m = grid.length;
        const n= grid[0].length;
        const directions = [[0,1],[1,0],[-1,0],[0,-1]];
        function dfs(x,y,currentArea){
            if(x>=m || y>=n|| x<0 ||y<0 || grid[x][y]!=1)return 0;
            grid[x][y]=0;
            let area = 1;
            for(const [dx,dy] of directions){
                area+=dfs(dx+x,dy+y);
            }
            return area;
        }
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(grid[i][j]==1){
                    let area = dfs(i,j);
                    maxArea = Math.max(area,maxArea)
                }
            }
        }
        return maxArea;
    }
}
