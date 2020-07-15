var groupAnagrams = function (strs) {
    let map = new Map()

    for (let i = 0; i < strs.length; i++) {
        let sortStr = strs[i].split('').sort().join('')
        console.log(sortStr)
        if (map.has(sortStr)) {
            let tmp = map.get(sortStr)
            tmp.push(strs[i])
            map.set(sortStr, tmp)
        } else {
            map.set(sortStr, [strs[i]])
        }
    }
    return [...map.values()]
}
