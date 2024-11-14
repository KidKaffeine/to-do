const express = require("express")
require('dotenv').config()

const app = express()

app.get("/api/tasks", (req, res) => {
    res.send("Hello world")
})

app.listen(5000, (req, res) => {
   console.log(`Listening on port ${process.env.PORT}`)
})