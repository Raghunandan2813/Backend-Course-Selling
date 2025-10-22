
import { Router } from "express";
 const courseRouter = Router();

courseRouter.post("/purchases", function(req ,res){


    res.json({
        message: "heynode "
    })
})


courseRouter.get("/preview", function(req , res){
        res.json({
            message: "signup endpoint"
        })

})

export default courseRouter
