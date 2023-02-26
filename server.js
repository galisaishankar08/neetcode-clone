const express = require('express');

const app = express();

app.use(express.static("frontend"))

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/frontend/index.html");
})

app.listen(3002, function () {
    console.log("Server listening on port http://localhost:3002/")
});
