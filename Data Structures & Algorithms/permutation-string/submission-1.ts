class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1: string, s2: string): boolean {
        const n1=s1.length, n2 = s2.length;
        if(n1>n2)return false;
        const need = new Map<string,number>();
        const isPermute = () => need.size == 0;
        function add(char:string, delta:number){
            let curr = (need.get(char)??0)+delta;
            if(curr==0)need.delete(char);
            else need.set(char,curr);
        }
        for(let i=0;i<n1;i++){
            add(s1[i],1);
            add(s2[i],-1);
        }
        if(isPermute())return true;
        for(let i=n1;i<n2;i++){
            const inChar = s2[i];
            const outChar = s2[i-n1];
            add(inChar,-1);
            add(outChar,1);
            if(isPermute())return true;
        }
        return false
    }
}
