class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board: string[][]): void {
        // Phase 1: Run through the board border, if value is 'O'->mark 'T' and run dfs(i,j) on all 4 directions(find 'O') and mark as 'T'
        //Phase 2: Mark all other positions as 'X'
        //Phase 3: Mark all 'T' positions as 'O'
        const n = board.length,m=board[0].length;
        if(n==0||n==1)return;
        const directions = [[1,0],[0,1],[0,-1],[-1,0]]
        function dfs(x,y){
            if(x<0 || y<0 || x>=n || y>=m || board[x][y]!='O')return;
            board[x][y]='T';
            for(const [i,j] of directions){
                    const dx = x+i;
                    const dy = y+j
                    dfs(dx,dy)
            }

        }
        //P1 - Flip border adjacent 'O' to 'T' and it's adjacent O's
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(board[i][j]=='O' && ([0,n-1].includes(i) || [0,m-1].includes(j)))dfs(i,j)
            }
        }
        //P2 - Flip remaining 'O' to 'X'
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(board[i][j]=='O')board[i][j]='X'
            }
        }
        //P3 - Flip 'T' to 'O'
        for(let i=0;i<n;i++){
            for(let j=0;j<m;j++){
                if(board[i][j]=='T')board[i][j]='O'
            }
        }
        return

    }
}
