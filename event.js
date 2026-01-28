// const EventEmitter = require('events')       //import the module
// const emitter = new EventEmitter()   //created an object of the event emitter class
// emitter.on('greet', () =>
// {
//     console.log('Yo JS')
// })
// emitter.emit('greet', 'Yoo whatsuppp!!!!')


const EventEmitter = require('events')
const emitter = new EventEmitter()
emitter.on('start', () =>
    {
        console.log('The Process has started')
    })
emitter.emit('start')
