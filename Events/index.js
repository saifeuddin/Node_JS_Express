const EventEmitter = require('events')
const events = new EventEmitter


events.on('response', ()=> {
    console.log('data received')
})

events.on('response', ()=> {
    console.log('data received again')
})
events.on('response', (name, id)=> {
    console.log('data received again: ' + name + ' ' + id)
})

events.emit('response', 'saife uddin', 23)



