import express from 'express';
import cors from 'cors';

const app = express();

//get the data from the body using json type
//built in middleware
app.use(express.json());

//cors middleware
app.use(cors({
    origin: ["http://localhost:3000"], // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true
}));

//global middleware
app.use((req,res,next)=>{
    //res.send("Hellow im the Global middleware")
    next()
})

app.get("/",(req,res)=>{
    console.log("Get request has been sent to the server");
    res.send("Hellow... This is node.js backend server");
})

app.listen(5000, () => {
    console.log('Server is running on port 3000');
});