const render = (str, obj) => {
    const reg = /\{\{(.+?)\}\}/g

    return str.replace(reg,($1, $2)=>{
        return obj[$2]
    })
}

render("我是{{name}}，年龄{{age}}", {
    name: "lucifer",
    age: 17
});

// 结果： 我是姓名，年龄18
