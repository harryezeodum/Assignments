const express = require("express");
const app = express();
const { v4: uuidv4 } = require("uuid");
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/cars", (req, res, next) => {
    req.body = [
        { make: "Toyota", model: "Rav4", year: 2017, id: uuidv4() },
        { make: "Honda", model: "Civic", year: 2019, id: uuidv4() },
        { make: "Land Rover", model: "Velar", year: 2020, id: uuidv4() },
        { make: "Cadillac", model: "Escalade", year: 2021, id: uuidv4() },
        { make: "Nissan", model: "Amarda", year: 2018, id: uuidv4() },
        { make: "Hyundia", model: "Santa fe", year: 2016, id: uuidv4() }
    ];
    next();
})

app.get("/api/cars", (req, res, next) => {
    res.send(req.body);
    next();
})

app.listen(9000, () => {
    console.log("The server is running on Port 9000");
})