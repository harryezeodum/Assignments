const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("dev"));

app.use("/todos", require("./routes/todoBackendRoutes.js"));


app.listen(9001, () => {
    console.log("The Server is running on Port 9001");
})