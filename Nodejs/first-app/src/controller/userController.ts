import { Request,Response } from "express"
import { User } from "../models/userModel";

export const createUser = async (req:Request,res:Response)=>{
    //const userData = req.body
    //console.log("Userdata : " ,userData);

    try{
        const{ name, email, age} = req.body

        if(!name || !email){
            return res.status(400).json({
                message:"Name and email are required fields"
            })
        }

        const exUser = await User.findOne({
            email:email
        }).then((existingUser)=>{
            if(existingUser){
                return res.status(400).json({
                    message:"User with this email already exists"
                })
            }
        })

        const newUser = new User({
            // left side --> schema field
            // right side --> request body data
            name,
            email,
            age
        })
        const savedUserData = await newUser.save()

        res.status(201).json({
            message:"User data saved successfully",
            data:savedUserData
        })
    }catch(error){
        console.error("Error creating user:", error);
        res.status(500).json({
            message:"Internal server error",
            error:error
        })
    }
}

export const getAllUser = (req:Request,res:Response)=>{
    res.send("Hello.. from userRouter")
}

// export const updateUser = (req:Request, res: Response)=>{
//     res.send("")
// }