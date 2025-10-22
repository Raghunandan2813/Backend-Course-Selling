import express from "express"

import userRouter  from "./routes/user.js";
import courseRouter from "./routes/course.js";
const app= express();

app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)

app.listen(3000);

