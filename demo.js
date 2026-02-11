// // third party module
// // const moment = require('moment')
// // console.log("current date and time: " +moment().format('mm do yyyy, h:mm:ss a'))

// server
// const  http = require('http') // import the module

// // create a server
// const server = http.createServer((req,res)=>{
//     res.writeHead(200 , { 'content-type': 'text/plain'})
//     res.end('Hello js')
// })

// // start the server
// server.listen(3000,()=>
// {
//     console.log('server is running ')
// })


// const http = require('http')

// // create a server
// const server = http.createServer((req, res) => {
//     req.write("hello this is js")
//     res.end()
// })

// // start  the server
// server.listen(3000, () => {
//     console.log("code is ok")
// })


// const http = require('http') //import the module

// // create a server
// http.createServer((res, req) => {
//     function add(a, b) //create a function
//     {
//         return a + b
//     }
//     res.end(`the sum is : ${add(3, 5)}`)
// }).listen(3000, () => {
//     console.log("server is running")
// })


//CREATE A FUNCTOIN TO SHOW THE RESULT OF FACTORIAL OF A NUMBER AND GET THE RESULT ON THE SERVER
//WRITE A CODE TO DISPLAY AREA OF A ROOM ON THE SERVER.

// const http = require('http') //import the module

// // create a server

// http.createServer((req,res )=>
// {
//     function fact(n) //create a function for the program

//     {
//         return (n==0 || n==1) ? 1 :n*fact(n-1)
//     }
//     res.end(`the factorial is : ${fact(5)}`)

// }).listen(3000, () => {
//     console.log("the server is running")
// })



//DISPLAY JSON DATA ON THE SERVER

// const http = require('http') //import the module

// create a server

// http.createServer((req, res) => {
//     res.writeHead(200, { 'content-type': 'application/json' })

//     const data =
//     {
//         name: "Somesh",
//         age: 20,
//         department: "CSE"

//     }
//     res.end(JSON.stringify(data))
// }).listen(3000, () => {
//     console.log("the server is currently running")
// })

//SERVE HTML FILE BASED ON THE ROUTE
const http = require('http')

