class Solution {
    /**
     * @param {number[][]} matrix
     * @return {number[]}
     */
    spiralOrder(matrix: number[][]): number[] {
        const rows = matrix.length
        const cols = matrix[0].length
        let left=0,right=cols-1,top=0,bottom=rows-1;
        const res = [];
        while(top<=bottom && left<=right){
            for(let j=left;j<=right;j++){
                res.push(matrix[top][j]);
            }
            top++;
            for(let i=top;i<=bottom;i++){
                res.push(matrix[i][right]);
            }
            right--;
            if(top<=bottom){
                for(let j=right;j>=left;j--){
                    res.push(matrix[bottom][j]);
                }
                bottom--;
            }
            if(left<=right){
                for(let i=bottom;i>=top;i--){
                    res.push(matrix[i][left]);
                }
                left++;
            }
        }
        return res
    }
}
