import { Router,Request,Response } from "express";

const router = Router()

// get
router.get("/getAllUser" , (req:Request,res : Response)=>{
    res.send("Hello.. from userRouter")
})

// post
router.post("/userPost",(req:Request,res:Response)=>{
    const userData = req.body

    console.log("Userdata : " ,userData);

    res.status(201).json({
        message:"User data received successfully",
        data:userData
    })
})

export default router