const express = require('express');
const mongoose = require('mongoose');
const dotenv =  require("dotenv");
dotenv.config()

const courseLib = require('./backend/lib/courseLib');

const app = express();

app.use(express.static("frontend"))



app.get("/", function(req, res) {
    res.sendFile(__dirname + "/frontend/index.html");
})

mongoose.set("strictQuery", true)
mongoose.connect(process.env.MONGO_CONNECTION_STRING, async function(err){
    if(err) {
        console.error("Error")
    }
    else{
        console.log("db connected");
        await courseLib.createFirstCourse();
        const courses = await courseLib.getAllCourses();
        console.log(courses);
        app.listen(3000, function () {
            console.log("Server listening on port http://localhost:3002/")
        });
    }
})
