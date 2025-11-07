import express , { Application ,Request,Response} from "express";
import authRoute from "./routes/authRoute";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

//configuring dotenv => for loading the config variables
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT as string
const MONGO_URI = process.env.MONGO_URI as string

const app:Application = express();

app.use(express.json());

app.use(cors({
    origin:["http://localhost:3000","http://localhost:5175", "http://localhost:5000"],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

app.use("/api/v1/auth", authRoute);

mongoose.connect(MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log("Error connecting to MongoDB:", err);
    process.exit(1); // Exit the application if unable to connect to the database => shutdown the server
})

app.listen(SERVER_PORT,()=>{
    console.log("Server is running on port 5000");
})