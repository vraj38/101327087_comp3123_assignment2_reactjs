const express = require('express');
const mongoose = require('mongoose');
const app = express();

const employee = require('./Routes/employee');
const users = require('./Routes/users');

const SERVER_PORT = 8081;

const DB_URL = "mongodb+srv://Vraj38:vraj@cluster0.nwmxkkr.mongodb.net/comp3123_assigment1?retryWrites=true&w=majority"

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/user/", users);
app.use("/api/emp/", employee);

app.route("/").get((req, res) => {
    res.send("<h1>Assignment 1 - COMP3123 - Vraj Patel</h1>");
})

app.listen(SERVER_PORT, () => {
    console.log(`Server running at http://localhost:${SERVER_PORT}/`)
})