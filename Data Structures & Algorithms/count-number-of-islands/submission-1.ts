class Solution {
    /**
     * @param {character[][]} grid
     * @return {number}
     */
    numIslands(grid: string[][]): number {
        const rows = grid.length;
        if(rows==0)return 0;
        const cols = grid[0].length;
        if(cols==0)return 0;
        let res = 0;
        const directions: [number, number][] = [
            [1, 0],
            [-1, 0],
            [0, 1],
            [0, -1],
        ];
        function dfs(i:number,j:number):void{
            if(i<0 || j<0 || i>=rows ||j>=cols)return;
            if(grid[i][j]!='1')return;
            grid[i][j]='0';
            for(const [x,y] of directions){
                dfs(i+x,y+j)
            }
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
