import { Request,Response } from "express";

export const userRegister = async (req:Request,res:Response)=>{
    res.send('Register Route');
}

export const userLogin = async (req:Request,res:Response)=>{
    res.send('Login Route');
}

export const getUserDetail = (req:Request,res:Response)=>{
    res.send('Get Details Route')
}

export const adminRegister = async (req:Request,res:Response){
    res.send('Admin Register Route')
}