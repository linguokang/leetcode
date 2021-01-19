class myPromise {
    constructor(execute){
        this.status = ''
        this.value = ''

        this.onResolvedCallbacks = []
        this.onRejectedCallbacks = []

        const resolve = (data) => {
            if(this.statue === 'pending'){
                this.statue = 'resolve'
                this.value = data
                this.onResolvedCallbacks.forEach(fn => fn());
            }
        }

        const reject = () => {
            if(this.status === 'pending'){
                this.reason = reason;
                this.status = 'rejected';
                this.onRejectedCallbacks.forEach(fn => fn());
            }
        }

        try{
            execute(resolve, reject)
        }catch (error){
            reject(error)
        }
    }
    then(onFulFilled, onRejected){
        if (this.status === 'resolved') {
            onFulFilled(this.value);
        }
        if (this.status === 'rejected') {
             onRejected(this.reason);
        }
        if (this.status === 'pending') {
            // 存放成功的回调
            this.onResolvedCallbacks.push(() => {
              onFulFilled(this.value);
            });
            // 存放失败的回调
            this.onRejectedCallbacks.push(() => {
              onRejected(this.reason);
            });
          }
    }
}

new myPromise((resolve, reject)=>{
    resolve('result')
})
