import { Schema } from "mongoose";


const userSchema= Schema({
email: {type: String, unique: true},
password: String,
firstName: String,
lastName: String,
})


const adminSchema= Schema({


})


const courseSchema= Schema({


})


const purchaseSchema= Schema({


})


const userModel = mongoose.Model("user", userSchema)
const adminModel = mongoose.Model("admin", userSchema)
const courseModel = mongoose.Model("course", userModel)
const purchaseModel = mongoose.Model("purchase", userModel)