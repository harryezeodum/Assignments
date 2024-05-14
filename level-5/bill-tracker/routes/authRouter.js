const express = require("express");
const authRouter = express.Router();
const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

let error;
// Signup
authRouter.route("/signup")
    .post(async (req, res, next) => {
        try {
            const user = await User.findOne({ username: req.body.username.toLowerCase() });
            if (user) {
                res.status(403)
                error = { errMsg: "Username already exists" };
                return next(error);
            }
            else {
                const newUser = new User(req.body);
                await newUser.save();
                const token = jwt.sign(newUser.toObject(), process.env.SECRET)
                return res.status(201).send({ token, user: newUser });
            }
        }
        catch (err) {
            error = err.message;
            return next(error);
        }
    });

authRouter.route("/login")
    .post(async (req, res, next) => {
        try {
            const user = await User.findOne({ username: req.body.username.toLowerCase() });

            if (!user) {
                res.status(403)
                error = { errMsg: "Username or Password are incorrect" };
                return next(error);
            }

            if (req.body.password !== user.password) {
                res.status(403)
                error = { errMsg: "Username or Password are incorrect" };
                return next(error);
            }

            else {
                const token = jwt.sign(user.toObject(), process.env.SECRET);
                return res.status(200).send({ token, user });
            }
        }

        catch (err) {
            error = err.message;
            return next(error);
        }
    });



module.exports = authRouter