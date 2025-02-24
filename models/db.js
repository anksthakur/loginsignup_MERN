// mongodb connection
import mongoose from "mongoose"
import dotenv from "dotenv";

dotenv.config();

const mongoDb = process.env.MONGO_URI
const dbConnection = async()=>{
    try {
        await mongoose.connect(mongoDb)
        console.log("Mongo DB connected")
    } catch (error) {
        console.log("MongoDB connection errror :",error)
    }
}

export default dbConnection;