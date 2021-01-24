let flatDeep = (arr) => {
    return arr.reduce((acc, cur) => {
        if(Array.isArray(cur)){
            return [...acc, ...flatDeep(cur)]
        }else{
            return [...acc, cur]
        }
    }, [])
}

var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
flatDeep(arr1);
