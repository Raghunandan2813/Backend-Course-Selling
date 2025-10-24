import express from "express"

import userRouter  from "./routes/user.js";
import courseRouter from "./routes/course.js";
import userRouter from "./routes/user.js";
const app= express();

app.use('/api/v1/user', userRouter)
app.use('/api/v1/course', courseRouter)
app.use("/api/v1/admin", adminRouter)

app.listen(3000);

