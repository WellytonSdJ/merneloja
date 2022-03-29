require('dotenv').config();
const express = require('express')
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require('../node_modules/cors');

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use((req, res, next) => {
  res.header("access-Control-Allow-Origin", "*")
  app.use(cors());
  next()
})



app.use('/api/products', productRoutes)

const PORT = process.env.PORT || 5000; // caso não exista ele vai priorizar a porta 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))