require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, () => console.log('DB connected'))

app.listen(process.env.PORT, err => {
    if (err) return console.log(err);

    console.log('Server running')
})