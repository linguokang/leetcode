class EventEmitter {
    constructor() {
        this.events = {}
    }
    on(eventName, callblack) {
        if (!this.events[eventName]) {
            this.events[eventName] = [callblack]
        } else {
            this.events[eventName].push(callblack)
        }
    }
    emit(eventName) {
        this.events[eventName] && this.events[eventName].forEach(event => {
            event()
        });
    }
    removeListener(eventName, callblack) {
        this.events[eventName] = this.events[eventName].filter((cb) => {
            cb != callblack
        })
    }
    once(eventName, callblack) {
        const fn = () => {
            callblack()
            this.removeListener(eventName, callblack)
        }
        this.on(eventName, fn)
    }
}


const eventEmitter = new EventEmitter()
eventEmitter.on('lister', function () {
    console.log('lister')
})

eventEmitter.emit('lister')
