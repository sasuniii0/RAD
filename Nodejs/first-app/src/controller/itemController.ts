import { Request,Response } from "express";

export const getAllItems = (req:Request , res:Response)=>{
    res.send("GetAll from ItemRoute..")
}