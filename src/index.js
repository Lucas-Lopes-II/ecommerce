require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes')

mongoose.connect(process.env.MONGO_URI, () => console.log('DB connected'));

app.use("/", express.json(), userRoutes);
app.use("/", express.json(), productRoutes);
app.use("/", express.json(), cartRoutes);

app.listen(process.env.PORT, err => {
    if (err) return console.log(err);

    console.log('Server running')
})