class Solution {
    /**
     * @param {number[][]} matrix
     * @return {void}
     */
    setZeroes(matrix: number[][]): void {
        // Use 1st row and column to capture value for that row/column
        const m = matrix.length,  n = matrix[0].length;
        let topRow=false;
        for(let j=0;j<n;j++)if(matrix[0][j]==0)topRow=true;
        for(let i=1;i<m;i++){
            for(let j=0;j<n;j++){
                if(matrix[i][j]==0){
                    matrix[i][0]=0;
                    matrix[0][j]=0
                }
            }
        }
        for(let i=1;i<m;i++){
            for(let j=1;j<n;j++){
                if(matrix[i][0]==0 || matrix[0][j]==0)matrix[i][j]=0
            }
        }
        if(matrix[0][0]==0)for(let i=0;i<m;i++)matrix[i][0]=0
        if(topRow){
            for(let i=0;i<n;i++)matrix[0][i]=0
        }
        return;
    }
}
