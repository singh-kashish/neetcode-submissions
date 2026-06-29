class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const t = Array.from({length:m},()=>Array(n).fill(0));
        for(let i=0;i<m;i++)t[i][0]=1;
        for(let i=0;i<n;i++)t[0][i]=1;
        for(let i=1;i<m;i++){
            for(let j=1;j<n;j++){
                t[i][j]=t[i-1][j]+t[i][j-1];
            }
        }
        return t[m-1][n-1];
    }
}
