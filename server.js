const express = require('express');

const app = express();

app.get("/", function(req, res) {
    res.send("Hello, world!");
})

app.get("/getmyname", function(req, res) {
    res.send("SAI SHANKAR");
})

app.listen(3002, function () {
    console.log("Server listening on port http://localhost:3002/")
});
