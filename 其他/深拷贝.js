function deepClone(obj, map = new WeakMap()) {
    if(obj instanceof RegExp) return new RegExp(obj)
    if(obj instanceof Date) return new Date(obj)

    if (obj == null || typeof obj != 'object') return obj;

    if(map.has(obj)){
        return map.get(obj)
    }

    let cloneTarget = Array.isArray(obj) ? [] : {};
    map.set(obj, cloneTarget);

    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            cloneTarget[key] = deepClone(obj[key], map)
        }
    }

    return cloneTarget

}

let obj = {
    a: 1,
    b: {
        c: 2,
        d: 3
    },
    d: new RegExp(/^\s+|\s$/g)
}

deepClone(obj)
