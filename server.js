const express = require('express');
const mongoose = require('mongoose');
const dotenv =  require("dotenv")
dotenv.config()

const app = express();

app.use(express.static("frontend"))



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/frontend/index.html");
})

mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_CONNECTION_STRING, function(err){
    if(err) {
        console.error("Error")
    }
    else{
        console.log("db connected")
        app.listen(3002, function () {
            console.log("Server listening on port http://localhost:3002/")
        });
    }
})
