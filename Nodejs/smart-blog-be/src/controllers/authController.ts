import { Request,Response } from "express";
import { IUser,Role,Status,User } from "../models/userModel";
import { signAccessToken, signRefreshToken } from "../utils/tokens";
import { AuthRequest } from "../middlewares/authMiddleware";
import bcrypt from "bcryptjs"
import { existsSync } from "fs";
import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET as string;

export const userRegister = async (req:Request,res:Response)=>{
    try{
        const {firstName,lastName,email,password,role}=req.body; 
        
        if(!firstName || !lastName || !email || !password || !role){
            return res.status(400).json({message:"All fields are required"});
        }

        if(role !== Role.USER && role !== Role.AUTHOR && role !== Role.ADMIN){
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

        // if(!accessToken) {
        //     const refreshToken = signRefreshToken(existingUser)
        // }

        const refreshToken = signRefreshToken(existingUser)

        res.status(200).json({
            message : "success",
            data: {
                email: existingUser.email,
                Role: existingUser.role,
                accessToken,
                refreshToken
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

export const adminRegister = async (req:Request,res:Response)=>{
    try{
        const {firstName,lastName,email,password} =req.body
    
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json({
                message: "All fields required"
            })
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(400).json({
                message: "Email already exist"
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)

        const newAdmin = await User.create({
            firstName,
            lastName,
            email,
            password:hashedPassword,
            role :Role.ADMIN,
            approved: Status.APPROVED
        })

        return res.status(201).json({
            message: "New Admin registered successfully",
            admin:{
                id: newAdmin._id,
                firstName: newAdmin.firstName,
                lastName: newAdmin.lastName,
                email : newAdmin.email,
                role : newAdmin.role,
            },
        })
    }catch(err){
        return res.status(500).json({
            message: "Internel server error"
        })
    }
}

// api for get the refresh token from the request
export const handleRefreshToken = async (req:Request, res:Response)=>{
    try{
        const { refreshToken } = req.body

        // backend eken illpuw hmbune nathi unama bad request kyla error display krnn puluwn
        if(!refreshToken) {
            return res.status(400).json({message : "Token Required"})
        }

        const payload = jwt.verify(refreshToken , JWT_REFRESH_SECRET)
        //payload.sub - userID
        const user = await User.findById(payload.sub)
        if(!user) {
            return res.status(403).json({message : "Invalid refresh token"})
        }

        const accessToken = signAccessToken(user)
        res.status(200).json({accessToken})
        
    }catch(err){
        res.status(403).json({message: "Invalid or expired token"})
    }
}