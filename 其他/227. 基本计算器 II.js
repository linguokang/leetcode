var calculate = function (s) {
  let stack = [];
  let len = s.length;
  let curNum = 0;
  let preSign = '+'
  for (i = 0; i < len; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      curNum = curNum * 10 + (s[i] - '0')
    }
    if (isNaN(Number(s[i])) || i === len - 1) {
      switch (preSign) {
        case '+':
          stack.push(curNum);
          break
        case '-':
          stack.push(-curNum);
          break
        case '*':
          stack.push(stack.pop() * curNum);
          break
        case '/':
          stack.push(Math.floor(stack.pop() / curNum));
          break
      }
      preSign = s[i]
      curNum = 0
    }
  }
  return  stack.reduce((a,b) => { return a + b }, 0)
};
