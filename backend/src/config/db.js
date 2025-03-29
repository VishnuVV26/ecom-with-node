
const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo Db connected successfully`)
    } catch (error) {
        console.error(`Mongo Db connection failed : ${error.message}`)
        process.exit(1);
    }
}

module.exports = connectDB;