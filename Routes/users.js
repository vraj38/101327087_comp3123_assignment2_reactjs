const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const UsersModel = require('../models/Users');

//POST - /api/user/signup - 201 - Allow user to create new account
router.post('/signup', async (req, res) => {
    try {
        const newUser = new UsersModel(req.body)
        const userprof = await newUser.save();
        res.status(201).json(userprof)
    } catch (error) {
        res.status(400).json({message: "Error creating user account", status: false})
    }
});

//POST - /api/user/login - 200 - Allow User to access the system
router.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await UsersModel.findOne({
      username: username,
      password: password,
    });
    if (user) {
        if (user.password === password) {
            return res.status(200).json({"username" : user.username, "password" : user.password});
          }
    } else {
        res.status(400).json({message: "Invalid Username or Password", status: false})
    }
});

module.exports = router;