import { Request,Response } from "express"

export const createUser = (req:Request,res:Response)=>{
    const userData = req.body

    console.log("Userdata : " ,userData);

    res.status(201).json({
        message:"User data received successfully",
        data:userData
    })
}

export const getAllUser = (req:Request,res:Response)=>{
    res.send("Hello.. from userRouter")
}