import { Request, Response, Router } from "express";
import { send } from "process";

const route = Router()

route.get("/getAllItem",(req:Request, res:Response)=>{
    res.send("GetAll from ItemRoute..")
})

export default route