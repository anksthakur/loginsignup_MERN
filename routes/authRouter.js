import { Router } from "express";

const router = Router()

router.post('/login',(req,res)=>{
    res.send("Login Successfully")
})
router.post("/signup",(req,res)=>{
    res.send("Signup Successfully")
})

export default router