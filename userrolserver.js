// import the module
const express = require("express")
const app = express()
const port = 4200

//form to add 2 numbers
app.get('/', (req, res) =>
{
    res.send(`
    <form action = "/add" method="get">
        <input type="number" name="num1" placeholder="Enter the first number"><br>
        <input tyepe="number" name="num2" placeholder="Enter the second number"><br>
        <button type="submit">Add the Numbers</button>
        </form>

    `)
})
//to handle the form request
app.get("/add", (req, res) =>
{
    const num1 = Number(req.query.num1)
    const num2 = Number(req.query.num2)
    const sum = num1 + num2
    res.send(`The sum of the numbers is: ${sum}`)

})



app.listen(port, () => {
    console.log("Server is running")
})
