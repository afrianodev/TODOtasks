const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const PORT = process.env.port || 3000;

mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log('Connected to mongoDB'))
    .catch((err) => console.log(err))

app.listen(PORT, () => {
    console.log(`Running in port ${PORT}`);
})