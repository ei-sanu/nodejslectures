// import the module
const express = require("express")
const app = express()
const port = 4500

app.get('/', (req, res) => {
    res.end("Hello this is express")
})
app.listen(port, () => {
    console.log("Server is running")
})
