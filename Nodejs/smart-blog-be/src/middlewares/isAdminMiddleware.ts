import { Request,Response,NextFunction } from "express";
import {Role} from "../models/userModel"
import { AuthRequest } from "./authMiddleware";

export const isAdmin = (req:AuthRequest, res:Response, next: NextFunction)=>{
    try{
        if(!req.user){
            return res.status(401).json({
                message: "Unauthorized"
            })
        }

        const userRole = req.user.role
        if(Array.isArray(userRole)){
            if(!userRole.includes(Role.ADMIN)){
                return res.status(403).json({
                    message: "Access deined. Admin only"
                })
            }
        }else{
            if(userRole !== Role.ADMIN){
                return res.status(403).json({
                    message : "Access denied. Admin only"
                })
            }
        }

        next()
    }catch(error){
        res.status(500).json({
            message: "Server Error"
        })
    }
}