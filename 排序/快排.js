const quicksort = (arr) => {

    if(arr.length == 1){
        return arr
    }
    if(arr.length == 0){
        return []
    }

    const leftArr = []
    const rightArr = []
    const len = arr.length
    const mid = Math.floor(len/2)

    for(let i=0;i<len;i++){
        if(arr[i] > arr[mid]){
            rightArr.push(arr[i])
        }
        if(arr[i] < arr[mid]){
            leftArr.push(arr[i])
        }
    }

    return [...quicksort(leftArr),arr[mid],...quicksort(rightArr)]
}

quicksort([1,5,3,7,6,8])
