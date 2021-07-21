function sum(arr){
    return arr.reduce((acc, cur)=>{
        return acc + cur
    })
}

function solution(arr, n, m){
    const tmp = []
    const result = []

    function backtrack(path, start){
        if(path.length >= n){
            if(sum(path) === m){
                result.push(path)
            }
            return
        }

        for(let i=start;i<arr.length;i++){
            path.push(arr[i])
            backtrack(path.slice(), i + 1)
            path.pop()
        }
    }
    backtrack(tmp.slice(), 0)

    return result
}

const arr = [1,2,3,4,5,6,7]
solution(arr, 3, 10)
