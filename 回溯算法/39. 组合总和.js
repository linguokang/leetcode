/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let n = candidates.length;
    let result = []
    let path = []
    function backtrack(path,target,start){
         if(target < 0){
            return;
        }
        if(target == 0){
            result.push(path)
            return
        }
         for(let i = start;i < n;i++){
            path.push(candidates[i])
            backtrack(path.slice(),target-candidates[i],i)
            path.pop()
        }
    }
    backtrack(path.slice(),target,0)
    return result
};
