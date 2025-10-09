// console.log('Hello, World!');

// // clg --> the shortcut for the console log...
// console.log("Hello...my first-app")

//------------------------------------------------------------------------------------
import express, { Application } from 'express';

// : Application --> it is a type annotation which is used to define the type of the variable app.
const app:Application = express()

// send a get request to the server.
// "/" --> it is the root route of the server.
app.get("/",(req,res)=>{
    res.send("Hello, World! This is my first app using express and typescript.")
})

// we can check from the callback function that the server is running or not.`
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})