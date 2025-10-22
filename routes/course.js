
const {Router} = require("express");
const courseRouter = Router();

courseRouter.post("/courses/purchases", function(req ,res){


    res.json({
        message: " "
    })
})


courseRouter.get("/courses/preview", function(req , res){


})



module.exports={
    courseRouter: courseRouter
}