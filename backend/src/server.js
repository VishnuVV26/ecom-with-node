const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
dotenv.config();
connectDB();


const app = express();
app.use(express.json());


const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
    res.send("Hi welcome to node ")
})
app.listen(PORT, () => console.log(`Server running on the ${PORT}`))