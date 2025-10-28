import { Schema } from "mongoose";


const userSchema= Schema({
email: {type: String, unique: true},
password: String,
firstName: String,
lastName: String,
})


const adminSchema= Schema({
email: {type: String, unique: true},
password: String,
firstName: String,
lastName: String,

})


const courseSchema= Schema({
title: String,
description:String,
price: Number,

})


const purchaseSchema= Schema({


})


const userModel = mongoose.Model("user", userSchema)
const adminModel = mongoose.Model("admin", userSchema)
const courseModel = mongoose.Model("course", userModel)
const purchaseModel = mongoose.Model("purchase", userModel)