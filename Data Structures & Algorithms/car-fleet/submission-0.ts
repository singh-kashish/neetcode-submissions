class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target: number, position: number[], speed: number[]): number {
        const n = position.length;
        if(n==0)return 0
        const cars = [];
        for(let i=0;i<n;i++){
            cars.push([position[i],speed[i]])
        }
        cars.sort((a,b)=>b[0]-a[0]);
        const stack = new Array();
        let maxTime = 0, fleets=0;
        for(let i=0;i<n;i++){
            const currPos = cars[i][0];
            const currSpd = cars[i][1];
            const currTime = (target-currPos)/currSpd;
            if(currTime>maxTime){
                fleets++;
                maxTime=currTime;
            }
        }
        return fleets;
    }
}
