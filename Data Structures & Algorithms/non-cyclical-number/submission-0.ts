class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n: number): boolean {
        //return true if n becomes 1
        let res = false
        function check(x:number):void{
            if(x==0)return;
            if(x==1){
                res=true;
                return;
            }
            let newN = 0 ;
            while(x){
                newN+= Math.pow(Math.floor(x%10),2)
                x=Math.floor(x/10);
            }
            if(dict.has(newN)){
                res= false;
                return;
            }
            dict.add(newN);
            if(newN==1){
                res = true;
                return;
            }
            else check(newN);
        }
        const dict = new Set<number>()
        check(n)
        return res;
    }
}
