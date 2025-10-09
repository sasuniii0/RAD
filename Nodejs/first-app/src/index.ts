// console.log('Hello, World!');

// // clg --> the shortcut for the console log...
// console.log("Hello...my first-app")

//------------------------------------------------------------------------------------

// before node 16 --> common js / module.export
//const express = require("express")

//ESNext --> (ES module) - import/export syntax
import express, { Application ,Request,Response} from 'express';
import { data } from 'react-router-dom';
import userRoutes from "./routes/userRoutes"
import itemRoutes from "./routes/itemRoutes"
import mongoose from 'mongoose';


// : Application --> it is a type annotation which is used to define the type of the variable app.
const app:Application = express()

// send a get request to the server.
// "/" --> it is the root route of the server.

// this endpoints are handeling in routes
// app.get("/api/v1",(req:Request,res:Response)=>{
//     res.send("Hello, World! This is my first app using express and typescript.")
// })

// to handle the post request we need to use the middleware to parse the json data.
// we can use the express.json() middleware to parse the json data. we dont need send() method to send the data in json format.
// we can use the req.body to get the data from the request body.
//Json data is sent in the request body.
// we can use the res.json() method to send the data in json format.
app.use(express.json())

// app.post("/api/v1",(req:Request,res:Response)=>{
//     const userData = req.body

//     console.log("Userdata : " ,userData);
//     //console.log("Userdata : " , JSON.stringify(userData));

//     // send the response to the client.
//     // 201 --> it is the status code for the created resource.

//     res.status(201).json({
//         message:"User data received successfully",
//         data:userData
//     })
// })

//mount routes
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/item", itemRoutes)

// connect to the database
// mongodb promise based database
const mongo = mongoose.connect("mongodb://localhost:27017/mongo_test")
console.log(mongo)
mongo.then((res)=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log("Database connection failed", err);
})

// we can check from the callback function that the server is running or not.`
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})