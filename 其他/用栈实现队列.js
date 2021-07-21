class queue {
  constructor() {
    this.list1 = [];
    this.list2 = [];
  }
  unshift(val) {
    this.list1.unshift(val);
  }
  pop() {
    let tmp = this.list1.shift();
    this.list2.unshift(tmp);
    return this.list2.shift();
  }
}

const myqueue = new queue();

myqueue.unshift('1');
myqueue.unshift('2');
myqueue.unshift('3');
console.log(myqueue);
// console.log(myqueue.pop())
// console.log(myqueue)
