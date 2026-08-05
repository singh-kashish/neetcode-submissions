class Solution {
    /**
     * @param {character[][]} board
     * @param {string} word
     * @return {boolean}
     */
    exist(board: string[][], word: string): boolean {
        const m = board.length, n =board[0].length;
        const directions = [[0,1],[1,0],[0,-1],[-1,0]];
        let visited = new Set<string>();
        let found = false;
        function backtrack(x,y,index){
            if(x<0 || y<0 || y>=n || x>=m || board[x][y]!=word[index] || visited.has(`${x}-${y}`)){
                return;
            }
            if( index == word.length-1){
                found = true;
                return;
            }
            visited.add(`${x}-${y}`)
            for(const [i,j] of directions){
                backtrack(i+x,j+y,index+1);
                if(found)break
            }
            visited.delete(`${x}-${y}`)
        }
        for(let i=0;i<m && !found;i++){
            for(let j=0;j<n;j++){
                if(board[i][j]==word[0]){
                    backtrack(i,j,0)
                }
            }
        }
        return found;
    }
}
