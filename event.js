const EventEmitter = require('events')       //import the module
const emitter = new EventEmitter()   //created an object of the event emitter class
emitter.on('greet', () =>
{
    console.log('Yo JS')
})
emitter.emit('greet', 'Yoo whatsuppp!!!!')
