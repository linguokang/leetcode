// JS实现一个带并发限制的异步调度器Scheduler，
// 保证同时运行的任务最多有两个。
// 完善代码中Scheduler类，
// 使得以下程序能正确输出

const arr = [1,5,3]
console.log(arr.slice(0,1))

class Scheduler {
	constructor() {
		this.count = 2
		this.queue = []
		this.run = 0
	}

	add(task) {
        return new Promise((resolve)=>{
            const fn = async () => {
                await task()
                resolve()
            }
            this.queue.push(fn)
            this.runfn()
        })
    }
    
    async runfn(){
        if(this.run >= this.count) return
        if(this.queue.length > 0){
            const currentTask = this.queue.shift()
            this.run++
            await currentTask()
            this.run--
            this.runfn()
        }
    }
}

class Scheduler {
 
    list = [];//用来承载还未执行的异步
   
    count = 0; //用来计数
   
    constructor(num) {
      this.num = 2; //允许同时运行的异步函数的最大个数
    }
   
    async add(fn) {
   
      this.count >= this.num ? await new Promise((resolve) => { this.list.push(resolve) }) : "";
   
      this.count++;
   
      const result = await fn();
   
      this.count--;
   
      if (this.list.length > 0) {
        this.list.shift()();
      }
   
      return result;
   
    }
   
  }
  

const timeout = (time) => new Promise(resolve => {
	setTimeout(resolve, time)
})

const scheduler = new Scheduler()
const addTask = (time, order) => {
    scheduler.add(() => timeout(time)).then(() => 
        console.log(order + new Date().getTime())
    )
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// output: 2 3 1 4

// 一开始，1、2两个任务进入队列
// 500ms时，2完成，输出2，任务3进队
// 800ms时，3完成，输出3，任务4进队
// 1000ms时，1完成，输出1
// 1200ms时，4完成，输出4