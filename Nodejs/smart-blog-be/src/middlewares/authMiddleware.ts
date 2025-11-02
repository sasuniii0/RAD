import { NextFunction,Response,Request } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
// Load environment variables from .env file
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET as string;

export interface AuthRequest extends Request {
    user?: any; // You can replace 'any' with a more specific type based on your payload structure
}

export const authenitcate = (req:AuthRequest,res:Response,next:NextFunction)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(401).json({message:"Unauthorized"});
    }

    // Bearer <token>
    const token = authHeader.split(" ")[1] // ['Bearer','<token>']

    try{
        const payload = jwt.verify(token,JWT_SECRET)
        req.user = payload; // attaching the payload to the req object
        next()
    }catch(err){
        return res.status(401).json({message:"Unauthorized"});
    }
}