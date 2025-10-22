const express = require("express")
const mongoose = require("monggose");
const jwt = require("jsonwebtoken");
const {userRouter} = require("./routes/course")
const { userCourse } = require("./routes/user");
const app= express();

app.use('/user', userRouter)
app.use('/course', userCourse)


createUserRoutes(app);

createCourseRoutes(app)

app.listen(3000)
