const express = require('express')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const UserRouter = require('./routes/userRoutes');
const categoryRouter = require('./routes/categoryRoutes');
const productsRouter = require('./routes/productRoutes');
dotenv.config();
connectDB();


const app = express();
app.use(express.json());


const PORT = process.env.PORT || 8000

app.use('/api', UserRouter)
app.use('/api', categoryRouter)
app.use('/api', productsRouter)

app.get('/', (req, res) => {
    res.send("Hi welcome to node ")
})
app.listen(PORT, () => console.log(`Server running on the ${PORT}`))