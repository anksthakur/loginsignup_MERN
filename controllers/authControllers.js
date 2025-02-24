import { User } from "../models/User.schema.js";
import bcrypt from "bcrypt"
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
dotenv.config();

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
    const {email,password}= req.body;
    const errMessage ="email and password wrong";
    const user = await User.findOne({email})
    if(!user){
        return res.status(403).json({message:errMessage,success:false})
    }
    const isPasword = await bcrypt.compare(password,user.password)
    if(!isPasword){
        return res.status(403).json({message:errMessage,success:false})
    }
    // if both password correct then create json token 
    // jwt payload leta hai 
    const jwtToken = jwt.sign({email:user.email,_id:user._id},
        process.env.JWT_SECRET,
        {expiresIn:'24h'}
    )
    res.status(200).json({message:"Login Successfully",success:true,jwtToken,email})
} catch (error) {
    res.status(500).json({message:"internal server error",error})
}
}

export {signup,login}