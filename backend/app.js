const express = require('express');
const mongoose =require("mongoose")
const cors = require('cors');

const userRouter = require('./routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);

module.exports = app;
