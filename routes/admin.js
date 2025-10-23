import {Router} from "express";
import { useReducer } from "react";
const adminRouter = Router();

adminRouter.post("/signup", function(req , res){


    res.json({

        message: "admin endpoint! "
    })
})


adminRouter.post("/signin", function(req , res){

    res.json({

        message: "admin endpoint!"
    })
})


adminRouter.post("/course", function(req , res){
    res.json({
        message: "admin endpoint!"
    })
})

adminRouter.put("/course", function(req , res){
    res.json({
        message: "admin endpoint!"
    })
})





adminRouter.get("/course/bulk", function(req , res){

    res.json({
        message: "admin endpoint!"
    })
})

export default adminRouter
