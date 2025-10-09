import { Router,Request,Response } from "express";
import { createUser, getAllUser } from "../controller/userController";

const router = Router()

// get
router.get("/getAllUser" , getAllUser)

// post
router.post("/userPost", createUser)

export default router