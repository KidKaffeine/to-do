const express = require("express")
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/api/tasks", require("./routes/routing"))

app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
})