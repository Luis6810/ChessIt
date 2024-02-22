const express = require("express");
const path = require("path");
const pug = require("pug");

// var mainGame = require("./src/mainGame.js");

const app = express()
app.set('view engine', 'pug')
app.use(express.static(path.join(__dirname, "/public")));
// app.use(express.static(path.join(__dirname, "/public/styles")));
// app.use(express.static(path.join(__dirname, "/public/scripts")));
// app.use(express.static(path.join(__dirname, "/public/img")));


app.get("/", (req, res) => {
    // app.get to handle GET requests
    // req - http request, res - desired response
    res.render("index.pug");
    // res.send("Hello World"); // send Hello World to this route
});

// app.use("/mainGame", mainGame);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

