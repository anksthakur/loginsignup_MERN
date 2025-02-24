import { Router } from "express";
import { loginValidation, signupValidation } from "../middleware/authValidation.js";
import { login, signup } from "../controllers/authControllers.js";

const router = Router()
//http://localhost:8080/api/v1/login
router.post('/login',loginValidation,login)
router.post("/signup",signupValidation,signup)


export default router