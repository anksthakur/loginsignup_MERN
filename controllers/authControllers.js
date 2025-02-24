import { User } from "../models/User.schema.js";
import bcrypt from "bcrypt"

const signup = async (req,res)=>{
try {
    const {name ,email,password}=req.body;
    const user = await User.findOne({email});
    if(user){
        return res.status(409).json({message:"User is already exists",success:false})
    }
    const newUser = new User({name,email,password});
    //password save krne se phle bcypt
    newUser.password = await bcrypt.hash(password,10);
    await newUser.save();
    res.status(201).json({message:"User register successfully",success:true})
} catch (error) {
    res.status(500).json({
        message:"Internal server error",
        success:false
    })
    console.log(error)
}
}

const login = async (req,res)=>{
try {
    
} catch (error) {
    console.log(error)
}
}

export {signup,login}