require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');

mongoose.connect(process.env.MONGO_URI, () => console.log('DB connected'));

app.use("/users", express.json(), userRoutes);

app.listen(process.env.PORT, err => {
    if (err) return console.log(err);

    console.log('Server running')
})