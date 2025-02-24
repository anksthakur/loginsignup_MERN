// node connection
import express from "express";
import dotenv from "dotenv";
import dbConnection from "../backend/models/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/authRouter.js";

import productRouters from "./routes/productRouter.js";
dotenv.config({
    path: "./.env"
});
//mongo db connection
dbConnection()

const app = express()
//jo req client se aayengi body m
app.use(bodyParser.json())
// allow where we can accept req
app.use(cors())
//router
app.use("/api/v1",router)
app.use("/api/v1",productRouters)

const PORT = process.env.PORT || 8080
// checking server on browser
app.get("/check",(req,res)=>{
    res.send("Running")
})
// running in terminal
app.listen(PORT,()=>{
console.log(`Server is running on  ${PORT}`)
})