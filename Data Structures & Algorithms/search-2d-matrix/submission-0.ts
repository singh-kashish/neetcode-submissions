class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix: number[][], target: number): boolean {
        const m = matrix.length;
        if(m==0)return false;
        const n = matrix[0].length;
        if(n==0)return false;
        let top = 0, bottom = m-1, row=-1;
        while(top<=bottom){
            const mid = top + Math.floor((bottom-top)/2);
            if(matrix[mid][0]>target)bottom = mid-1;
            else if(matrix[mid][n-1]<target)top = mid+1;
            else{
                row = mid;
                break;
            }
        }
        if(row===-1)return false;
        let l=0,r=n-1;
        while(l<=r){
            const mid = l + Math.floor((r-l)/2);
            if(matrix[row][mid]==target)return true;
            else if(matrix[row][mid]<target)l=mid+1;
            else r=mid-1;
        }
        return false;
    }
}
