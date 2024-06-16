const express = require('express');
const app = express();
const connectDB = require('./config/database');
require('dotenv').config();
const port = process.env.PORT || 3000;
connectDB();
app.listen(port, () => { 
    console.log(`Server is running at ${port}`);
});