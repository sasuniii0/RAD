import { Request,Response } from "express";
import {IPost, Post} from "../models/postModel"
import {IUser, User} from "../models/userModel"
import { AuthRequest } from "../middlewares/authMiddleware";    
import { model, models } from "mongoose";
import { rejects } from "assert";
import cloudinary from "../config/cloudinary";


export const savePost = async(req:AuthRequest, res:Response)=>{
//    req.file?.buffer ==> file ek ram eke save wela thiyeddi meken eliyta gnna puluwan
    try{
        const {title,content,tags} = req.body;

        // if()
        
        if(!title || !content){
            return res.status(400).json({message : "All fiels are required"})
        }

        // time consume nisa promise ekk liyagnnma wenwaa
        let imageURL = ""
        if(req.file){
            const result :any = await new Promise((resolve,reject) =>{
                const uploadStream = cloudinary.uploader.upload_stream(
                    {folder:"posts"},
                    (error,result)=>{
                        if(error) return reject(error)
                            resolve(result)
                    }
                )
                uploadStream.end(req.file?.buffer)
            })
            imageURL = result.secure_url;
        }

        console.log(req.user)

        const newPost = new Post({
            title,
            content,
            tags: tags?.split(","),
            imageURL,
            author: req.user.sub
        })
        await newPost.save()
        
        //save in mongodb
        res.status(200).json({
            mesaage: "Post created successfully!",
            data: newPost
        })
    }catch(err:any){
        console.error(err)
        res.status(500).json({message: err?.mesaage})
    }

}

export const viewAllPost = async (req:Request,res:Response) =>{
    try{
        const page = parseInt(req.query.page as string) || 1
        const limit = parseInt(req.query.limit as string) || 10
        
        const skip = (page -1) * limit

        const posts = await Post.find()
        .populate("author","email")
        .sort({ createdAt : -1})
        .skip(skip)
        .limit(limit)

        const total = await Post.countDocuments()

        res.status(200).json({
            message : "Post Data",
            data: posts,
            totalPages : Math.ceil(total/limit),
            totalCount : total,
            page
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            message : error
        })
    }
}

export const getMyPost = async (req:AuthRequest,res:Response) =>{
    try{
        const page = parseInt(req.query.page as string)
        const limit = parseInt(req.query.limit as string)
        const skip = (page -1) * limit

        const posts = await Post.find({author: req.user.sub})
        .sort({createdAt : -1})
        .skip(skip)
        .limit(limit)

        const total = await Post.countDocuments()

        res.status(200).json({
            message: "Post Data",
            data: posts,
            totalPages : Math.ceil(total/limit),
            page
        })
    }catch(err : any){
        console.error(err)
        res.status(400).json({message: "Failed to fetch posts"})
    }

}