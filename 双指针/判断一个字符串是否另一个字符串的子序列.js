// 判断a是否是b的子序列
function isSequence(a, b) {
    let i=0
    let j=0
    while(i<a.length && j<b.length){
        if(a[i] == b[j]){
            i++
        }
        j++
    }

    return i == a.length
}
