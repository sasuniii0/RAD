import { Request,Response } from "express";

export const userRegister = async (req:Request,res:Response)=>{
    try{
        const {firstName,lastName,email,password}=req.body; 
        
        if(!firstName || !lastName || !email || !password){
            return res.status(400).json({message:"All fields are required"});
        }
    }catch(err:any){
        return res.status(500).json({message:"Server Error"});
    } 
}

export const userLogin = async (req:Request,res:Response)=>{
    res.send('Login Route');
}

export const getUserDetail = (req:Request,res:Response)=>{

}

export const adminRegister = async (req:Request,res:Response)=>{
    res.send('Admin Register Route')
}