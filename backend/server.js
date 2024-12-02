const express = require("express")
require('dotenv').config()
const cors = require("cors")
const db = require("./db/dbConnect")

const app = express()
const PORT = process.env.PORT

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/api/tasks", require("./routes/taskRouter"))
app.use("/api/users", require("./routes/userRouter"))


app.listen(PORT, (req, res) => {
    console.log(`Listening on port ${PORT}`)
    db()
})