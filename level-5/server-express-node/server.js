const express = require("express");
const app = express();
const morgan = require("morgan");


app.use(express.json());
app.use(morgan("dev"));

app.use("/users", require("./routes/userRoutes.js"));
app.use("/movie", require("./routes/movieRoutes.js"));


app.listen(9001, () => {
    console.log("The server is running on Port 9001");
})