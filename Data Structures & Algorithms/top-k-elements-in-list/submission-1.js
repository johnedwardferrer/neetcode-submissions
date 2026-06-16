class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map()
        let result = []
        for(const num of nums){
            map.set(num, (map.get(num) || 0)+1)
           
        }

        const bucket = Array.from({length:nums.length+1}, ()=>[])
      
        for(const [num, freq] of map){
            bucket[freq].push(num)
        }

        for(let freq = bucket.length-1; freq>=0; freq--){
            for(const num of bucket[freq]){
                result.push(num)

                if(result.length === k){
                    return result
                }
                
            }
        }



    
    }
}

