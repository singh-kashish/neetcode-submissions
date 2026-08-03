class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid: number[][]): number {
        const directions = [[0,1],[1,0],[0,-1],[-1,0]]
        let freshFruits = 0;
        let minutes = 0;
        const queue = new Array<Array<number>>();
        const m = grid.length, n=grid[0].length;
        for(let i=0;i<m;i++){
            for(let j=0;j<n;j++){
                if(grid[i][j]===2)queue.push([i,j]);
                if(grid[i][j]===1)freshFruits++;
            }
        }
        if(freshFruits==0)return 0;
        // while(queue.length){
        //     minutes++;
        //     const queueLength = queue.length;
        //     for(let t=0;t<queueLength;t++){
        //         const [x,y] = queue.shift();
        //         for(const [i,j] of directions){
        //             const dx = i+x;
        //             const dy = j+y;
        //             if(dx<0 || dy<0 || dx>=m || dy>=n || grid[dx][dy]!==1)continue;
        //             grid[dx][dy]=2;
        //             freshFruits--;
        //             queue.push([dx,dy]);
        //             if(freshFruits===0)return minutes;
        //         }
        //     }
        // }
        // if(freshFruits!=0)return -1;  
        // else return minutes;     
        while(queue.length){
            let rotted = false;
            const queueLen = queue.length
            for(let i=0;i<queueLen;i++){
                const [x,y] = queue.shift();
                for(const [dx,dy] of directions){
                    const i = dx+x;
                    const j = dy+y;
                    if(i<0 || j<0 || i>=m || j>=n ||grid[i][j]!==1)continue;
                    grid[i][j]=2;
                    rotted = true;
                    queue.push([i,j])
                    freshFruits--
                }
            }
            if(rotted)minutes++;
        }
        return freshFruits===0?minutes:-1 
    }
}
