import { Request,Response } from "express";
import { IUser,Role,Status,User } from "../models/userModel";
import { signAccessToken } from "../utils/tokens";
import { AuthRequest } from "../middlewares/authMiddleware";
import bcrypt from "bcryptjs"

export const userRegister = async (req:Request,res:Response)=>{
    try{
        const {firstName,lastName,email,password,role}=req.body; 
        
        if(!firstName || !lastName || !email || !password || !role){
            return res.status(400).json({message:"All fields are required"});
        }

        if(role !== Role.USER && role !== Role.AUTHOR){
            return res.status(400).json({message : "Invalid Role"})
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({message: "Email Already registered"})
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const approvalStatus = role === Role.AUTHOR ? Status.PENDING : Status.APPROVED

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            role: [role],
            approved:approvalStatus
        })

        await newUser.save()

        res.status(201).json({
            message:
            role=== Role.AUTHOR
            ? "Author registered successfully. waiting for the approval"
            : "User Registered successfully",
            data:{
                id:newUser._id,
                email: newUser.email,
                Role: newUser.role,
                approved: newUser.approved
            }
        })
    }catch(err:any){
        return res.status(500).json({message:"Server Error"});
    } 
}

export const userLogin = async (req:Request,res:Response)=>{
    try{
        const {email,password} = req.body
        const existingUser = await User.findOne({email})
        
        if(!existingUser){
            return res.status(401).json({message : "Invalid Credentials"})
        }

        const valid = await bcrypt.compare(password, existingUser.password)

        if(!valid){
            return res.status(401).json({ message : "Invalid credentials"})
        }

        const accessToken = signAccessToken(existingUser)

        res.status(200).json({
            message : "success",
            data: {
                email: existingUser.email,
                Role: existingUser.role,
                accessToken
            }
        })
    }catch(err:any){
        res.status(500).json({message : err?.message})
    }
}

export const getUserDetail = async (req:AuthRequest,res:Response)=>{
    if(!req.user){
        return res.status(401).json({ message : "Unauthorized"})
    }

    const userId = req.user.sub
    const user = ((await User.findById(userId).select("-password"))as IUser) || null

    if(!user){
        return res.status(404).json({
            message: "User not found"
        })
    }

    const { firstName, lastName , email , role, approved} = user

    res.status(200).json({
        message: "OK",
        data: {
            firstName,lastName,email,role,approved
        }
    })
}

export const adminRegister = async (req:AuthRequest,res:Response)=>{
    
}