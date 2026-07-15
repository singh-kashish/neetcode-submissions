/**
 * Definition of Interval:
 * class Interval  {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals: Interval[]): number {
        const n = intervals.length;
        if(n==0)return 0;
        if(n==1)return 1;
        let start = [];
        let end = [];
        for(let i=0;i<n;i++){
            start.push(intervals[i].start)
            end.push(intervals[i].end)
        }
        start.sort((a,b)=>a-b);
        end.sort((a,b)=>a-b);
        let rooms=0, i=0,j=0,maxRooms=0;
        while(i<n){
            if(start[i]<end[j]){
                rooms++;
                maxRooms = Math.max(rooms,maxRooms);
                i++;
            } else{
                rooms--;
                j++;
            }
        }
        return maxRooms;
    }
}
