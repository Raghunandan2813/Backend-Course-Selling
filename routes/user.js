
const {Router} = require("express");
const userRouter = Router();



userRouter.post("/user/singup", function(req ,res){


    res.json({
        message: "signup endpoint!"
    })
})


userRouter.post("/user/signin", function(req , res){

    res.json({


        message: "this is singin endpoint"
    })
})



userRouter.get("/user/purchases", function(req ,res){


    res.json({

        message: ""
    })
})






module.exports ={
    userRouter: userRouter

}