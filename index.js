const express = require("express")
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const {userRouter} = require("./routes/course")
const { courseRouter } = require("./routes/user");
const app= express();

app.use('/user', userRouter)
app.use('/course', courseRouter)


createUserRoutes(app);

createCourseRoutes(app)

app.listen(3000)
