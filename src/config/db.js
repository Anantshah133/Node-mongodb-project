const mongoose = require("mongoose");
const { MongoURL } = require("./config");
require("colors");

const connectDB = async () => {
    try {
        const url = MongoURL;
        const conn = await mongoose.connect(url);
        console.log(`MongoDb Connection successfull : ${conn.toString()}`.cyan.inverse);
    } catch (err) {
        console.log(`Error: ${err}`.red.bold)
    }
}

module.exports = {
    connectDB
}