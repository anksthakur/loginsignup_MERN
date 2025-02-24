import { Router } from "express";
import { ensureAuthenticate } from "../middleware/authProduct.js";


const productRouters = Router()
productRouters.get('/products',ensureAuthenticate,(req,res)=>{
    res.status(200).json([{
        name:"apple",
        price:10000
    },{
        name:"samsung",
        price:9000
    }])
})


export default productRouters