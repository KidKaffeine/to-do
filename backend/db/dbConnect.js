const mongoose = require('mongoose');

const dbConnect = async() => {
 try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Connected to database.")
 } catch (error) {
    throw new Error("Could not connect to DB")
 }
}

module.exports = dbConnect;

