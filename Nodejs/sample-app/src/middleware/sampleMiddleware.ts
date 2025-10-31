//sample middleware function

import { NextFunction ,Request,Response } from "express"

//can be used in multiple endpoints
export const sampleMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    //logic of middleware

    if(req.headers.authorization == null){
        // we have to use the return keyword here to stop the execution of the function
        return res.status(401).send("Unauthorized request - Missing authorization header")//response from middleware => go back
    }

    next() //to pass the control to next middleware or endpoint
}