class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const rows = grid.length;
        if(rows==0)return 0;
        const cols = grid[0].length;
        let res = 0;
        function dfs(i,j){
            if(i<0 || j<0 || i>=rows ||j>=cols)return;
            if(grid[i][j]==='1'){
                grid[i][j]='0';
                dfs(i+1,j);
                dfs(i-1,j);
                dfs(i,j+1);
                dfs(i,j-1);
            }
            return;
        }
        for(let i=0;i<rows;i++){
            for(let j=0;j<cols;j++){
                if(grid[i][j]==='1'){
                    res++;
                    dfs(i,j);
                }
            }
        }
        return res;
    }
}
