// To create a new Server
// npm init -y
// npm install express
// npm install morgan
// npm install -g nodemon
// npm install uuid for fake IDs
// npm install mongoose
// npm install jsonwebtoken and npm install dotenv
// npm install express-jwt

const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const mongoose = require("mongoose");
const { expressjwt: jwt } = require("express-jwt");

// Middleware
app.use(express.json());
app.use(morgan("dev"));

mongoose.connect("mongodb+srv://harryezeodum:Genesisruona2017.@cluster0.uxkyqgl.mongodb.net/BillTrackerDB?retryWrites=true&w=majority&appName=Cluster0", console.log('connected to db'));

// Routes
app.use("/api/auth", require("./routes/authRouter.js"));
app.use("/api", jwt({ secret: process.env.SECRET, algorithms: ["HS256"] }));
app.use("/api/billtracker", require("./routes/billTrackerRoutes.js"));

// Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    if (err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    res.send(err);
})


app.listen("9100", () => {
    console.log("connected to port 9100");
})