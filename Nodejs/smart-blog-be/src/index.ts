import express , { Application ,Request,Response} from "express";
import authRoute from "./routes/authRoute";
import cors from "cors";

const app:Application = express();

app.use(express.json());

app.use(cors({
    origin:["http://localhost:3000"],
    methods:["GET","POST","PUT","DELETE"]
}));

app.use(authRoute);

app.get("/api/v1/auth", authRoute);

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})