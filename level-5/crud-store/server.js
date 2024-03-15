// To create a new Server
// npm init -y
// npm install express
// npm install morgan
// npm install -g nodemon
// npm install uuid for fake IDs
// npm install mongoose

const express = require("express");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");

// Middleware (for every request)
app.use(express.json());
app.use(morgan("dev"));

mongoose.connect("mongodb+srv://harryezeodum:Genesisruona2017.@cluster2.aom4xx0.mongodb.net/CrudStoreDB?retryWrites=true&w=majority&appName=Cluster2", console.log("Connected to crud-store DB"));

app.use("/api/crudstore", require("./routes/inventory.js"));

// Error Handler
app.use((err, req, res, next) => {
    console.log(err);
    return res.status(501).send({ Error: err.message })
})

app.listen(9003, () => {
    console.log("Local server connected");
})