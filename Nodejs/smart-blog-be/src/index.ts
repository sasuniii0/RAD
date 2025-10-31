import express , { Application ,Request,Response} from "express";
import authRoute from "./routes/authRoute";
import cors from "cors";
import dotenv from "dotenv";

//configuring dotenv => for loading the config variables
dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT as string
const MONGO_URI = process.env.MONGO_URI as string

const app:Application = express();

app.use(express.json());

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","PUT","DELETE"]
}));

app.use("/api/v1/auth", authRoute);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})