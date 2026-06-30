class MinStack {
    constructor() {
        this.stack = [];
        this.min = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if(this.min.length==0){
            this.min.push(val)
        } else {
            if(this.min[this.min.length-1]>=val)this.min.push(val);
        }
        return;
    }

    /**
     * @return {void}
     */
    pop() {
       if(this.stack.length==0)return;
       let curr = this.stack.pop();
       if(this.min.length>0 && this.min[this.min.length-1]==curr)this.min.pop();
       return;
    }

    /**
     * @return {number}
     */
    top() {
        if(this.stack.length>0){
            return this.stack[this.stack.length-1];
        } else return -1;
    }

    /**
     * @return {number}
     */
    getMin() {
        if(this.min.length>0){
            return this.min[this.min.length-1];
        } else return Infinity;
    }
}
