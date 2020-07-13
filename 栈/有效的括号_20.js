var isValid = function(s) {
    let arr = []
    for(let i=0;i<s.length;i++){
        switch (s.charAt(i)){
            case '(':
                arr.push('(')
                break
            case '[':
                arr.push('[')
                break
            case '{':
                arr.push('{')
                break
            case ')':
                if(arr.pop() !== '('){
                    return false
                }
                break
            case ']':
                if(arr.pop() !== '['){
                    return false
                }
                break
            case '}':
                if(arr.pop() !== '{'){
                    return false
                }
                break
        }
    }
    return arr.length == 0
}
