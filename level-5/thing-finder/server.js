const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("dev"));
app.use(express.json());

app.use("/thing", require("./routes/thingRouter.js"));

app.listen(9002, () => {
    console.log("Connected to local port 9002");
})
