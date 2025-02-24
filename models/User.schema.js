import { required } from "joi"
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
name:{
    type:String,
    required,
},
email:{
    type:String,
    required,
    unique:true
},
password:{
    type:String,
    required
}
},{timestamps:true})

export const User = mongoose.model("User",userSchema)