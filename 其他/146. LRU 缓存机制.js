class LRU{
    constructor(rongliang){
        this.map = new Map()
        this.rongliang = rongliang
    }

    get(key){
        let val
        if(this.map.has(key)){
            val = this.map.get(key)
        } else {
            val = -1
        }

        this.map.delete(key)

        this.map.set(key, val)

        return val
    }

    put(key, val) {
        if(this.map.has(key)){
            this.map.delete(key)
        }

        this.map.set(key, val)

        if(this.map.size > this.rongliang){
            this.map.delete(this.map.entries().next().value[0])
        }
    }
}