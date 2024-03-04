const express = require("express");
const userRouter = express.Router();
const { v4: uuidv4 } = require("uuid");

const users = [
    { name: "John", age: 20, _id: uuidv4() },
    { name: "Maty", age: 10, _id: uuidv4() },
    { name: "Smith", age: 15, _id: uuidv4() },
    { name: "Joe", age: 24, _id: uuidv4() }
];

userRouter.route("/")
    .get((req, res) => {
        res.send(users);
    })

    .post((req, res) => {
        const newUser = req.body;
        newUser._id = uuidv4();
        users.push(newUser);
        res.send(newUser);
    })

userRouter.route("/:userId")
    .get((req, res) => {
        const userId = req.params.userId;
        const foundUser = users.find(user => user._id === userId);
        res.send(foundUser);
    })





module.exports = userRouter 