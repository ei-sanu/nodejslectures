var EventEmitter = require('events')        //import the module
var obj = new EventEmitter()   //created an object of the event emitter class


obj.addListener('marketOpen', (msg) => {
    console.log(msg)
})
obj.emit('marketOpen', 'The market is now open')
obj.on('Weather', (msg) =>
{
    console.log(msg)
})
obj.emit('Weather', 'The Weather is having mood swings nowadays')

obj.once('circus', (msg) =>
{
    console.log(msg)
})
obj.emit('circus', 'The circus is going to hv at the center of the City.')
obj.emit('circus', 'The circus is now closed.')

console.log(obj.getMaxListeners())
obj.setMaxListeners(30)
console.log(obj.getMaxListeners())


var fun1 = () =>
{
    console.log("This is so much fun")
}
var fun2 = () =>
{
    console.log("The fun was for a short moment")
}
obj.addListener("marketOpen", fun1)   //callback
obj.addListener("marketOpen", fun2)
obj.emit('marketOpen')

obj.removeListener("marketOpen", fun2)
obj.emit('marketOpen')
obj.removeAllListeners("marketOpen")
