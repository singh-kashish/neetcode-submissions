class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        const pairs = {
            ')':'(',
            '}':'{',
            ']':'['
        }
        for(const x of s){
            //Store opening brackets in stack
            if(x=='['||x=='{'||x=='(')stack.push(x);
            else{
                if(stack.length===0)return false
                const topElement = stack.pop();
                if(topElement!=pairs[x])return false;                
            }
        }
        return stack.length===0;

    }
}
