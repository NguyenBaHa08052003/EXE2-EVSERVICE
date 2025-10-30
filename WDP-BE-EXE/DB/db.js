const mongoose = require('mongoose');
var connect_uri = process.env.MONGO_URI
// var uri = process.env.MONGO_URI
const connectDB = async (req, res) => {
    try {
        const connect = await mongoose.connect(process.env.DB_CONNECT);
        console.log("Connect Done")
    } catch (error) {
        console.error(' MongoDB connection error:', error.message);
    }
}

module.exports = connectDB