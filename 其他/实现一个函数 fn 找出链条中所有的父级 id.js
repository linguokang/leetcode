const list = [{
    id: '1',
    name: 'test1',
    children: [
        {
            id: '11',
            name: 'test11',
            children: [
                {
                    id: '111',
                    name: 'test111'
                },
                {
                    id: '112',
                    name: 'test112'
                }
            ]

        },
        {
            id: '12',
            name: 'test12',
            children: [
                {
                    id: '121',
                    name: 'test121'
                },
                {
                    id: '122',
                    name: 'test122'
                }
            ]
        }
    ]
}];
const id = '112'
const fn = (id, list) => {
    let result = []
    const find = (path, curList) => {
        for(let i=0;i<curList.length;i++){
            if(curList[i].id == id){
                path.push(curList[i].id)
                result = path
                break
            }
            if(curList[i].children){
                path.push((curList[i].id))
                find(path.slice(), curList[i].children)
                path.pop()
            }
        };
    }
    find([].slice(), list)
    return result
}
fn(id, list) // 输出 [1， 11， 112]
