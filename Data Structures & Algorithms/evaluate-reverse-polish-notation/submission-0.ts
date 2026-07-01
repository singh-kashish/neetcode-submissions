class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        let stack:number[]=[];
        for(const i of tokens){
            if(i=='+'||i=='-'||i=='*'||i=='/'){
                let right = stack.pop();
                let left = stack.pop();
                let res:number;
                switch(i){
                    case '+':
                        res = left+right;
                        break;
                    case '-':
                        res = left-right;
                        break;
                    case '*':
                        res = left*right;
                        break;
                    case '/':
                        const div = left/right;
                        res =  div<0?Math.ceil(div):Math.floor(div);
                        break;
                }
                stack.push(res)
            }
            else stack.push(Number(i))
        }
        return stack.pop()!
    }
}
