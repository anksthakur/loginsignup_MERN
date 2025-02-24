import Joi from "joi"

const signupValidation = (req,res,next)=>{
const signupSchema = Joi.object({
    name:Joi.string().max(20).min(3).required(),
    email:Joi.string().email().required(),
    password:Joi.string().max(15).min(6).required(),
})
const {error} = signupSchema.validate(req.body)
if(error){
    return res.status(400).json({message:"Bad request",error})
}
next();
}

const loginValidation = (req,res,next)=>{
    const loginSchema = Joi.object({
        email:Joi.string().email().required(),
        password:Joi.string().max(15).min(6).required(),
    })
    const {error} = loginSchema.validate(req.body)
    if(error){
        return res.status(400).json({message:"Bad request",error})
    }
    next();
}

export {signupValidation,loginValidation}