import jwt from "jsonwebtoken"
import dotenv from "dotenv";

dotenv.config();

const ensureAuthenticate = (req,res,next)=>{
const auth = req.headers['authorization'];
if(!auth){
    return res.status(403).json({message:"Unauthorized"})
}
try {
    const decodedData = jwt.verify(auth,process.env.JWT_SECRET);
    req.user = decodedData;
    next();
} catch (error) {
    return res.status(403).json({message:"unauthorization"})
}
}
export {ensureAuthenticate}