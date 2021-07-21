function lensProp(lens, obj) {
    const keys = lens.split('.')
    return keys.reduce((acc, cur)=>{
        if(acc){
            return acc[cur]
        }else{
            return acc
        }
    }, obj)
}

const a = lensProp("a", { a: 1 }); // 1
const b = lensProp("b", { a: 1 }); // undefined
const c = lensProp("a.b", { a: { b: "c" } }); // c
const d = lensProp("a.b.c.d.e.f", { a: { b: "c" } }); // undefined

console.log(a);
console.log(b);
console.log(c);
console.log(d);