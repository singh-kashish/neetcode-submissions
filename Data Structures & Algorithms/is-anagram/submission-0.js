class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let m = new Map();
        for(const i of s){
            if(m.has(i)){
                m.set(i,m.get(i)+1);
            }
            else m.set(i,1);
        }
        for(const i of t){
            if(!m.has(i))return false;
            else{
                let count = m.get(i);
                m.set(i,count-1);
            }
        }
        for(const [x,y] of m){
            if(y!=0)return false;
        }
        return true;
    }
}
