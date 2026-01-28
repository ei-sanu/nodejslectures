const EventEmitter = require('events')       //import the module
const emitter = new EventEmitter()   //created an object of the event emitter class
emitter.on('greet', () =>
{
    console.log('yo js')
})
emitter.emit('greet', 'Yoo whatsuppp!!!!')
