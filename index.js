const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
    .connect("mongodb+srv://cksrlcks:peace8989@@boilerplate-vfnsv.mongodb.net/test?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    .then(() => console.log("MongoDB connected..."))
    .catch(err => console.log(err));

app.get("/", (req, res) => {
    res.send("Hello ");
});

app.listen(port, () => console.log(`example app listening on port ${port}!`));
