class Solution {
    /**
     * @param {number[][]} grid
     */
    islandsAndTreasure(grid: number[][]): void {
        const m = grid.length;
        const n = grid[0].length
        const queue = new Array<Array<number>>();
        const directions = [[1,0],[0,1],[-1,0],[0,-1]]
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(grid[i][j]===0)queue.push([i,j])
            }
        }

        while(queue.length){
            const [x,y] = queue.shift();
            for(const [i,j] of directions){
                const cX = x+i
                const cY = y+j
                if(cX<0 || cX>=m || cY<0 || cY>=n || grid[cX][cY]!==2147483647)continue;
                grid[cX][cY] = grid[x][y]+1
                queue.push([cX,cY])
            }
        }
        return
    }
}
