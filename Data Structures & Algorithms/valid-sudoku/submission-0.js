class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rowDict = Array.from({length:9},()=>new Set());
        let colDict = Array.from({length:9},()=>new Set());
        let matDict = Array.from({length:9},()=>new Set())
        for(let i=0;i<9;i++){
            for(let j=0;j<9;j++){
                const curr = board[i][j];
                if(curr=='.')continue
                let subMatrixId = Math.floor(i/3)*3+Math.floor(j/3);
                if(rowDict[i].has(curr) || colDict[j].has(curr)||matDict[subMatrixId].has(curr))return false;
                rowDict[i].add(curr);
                colDict[j].add(curr);
                matDict[subMatrixId].add(curr)
            }
        }
        return true
    }
}
