import express from 'express';
import cors from 'cors';
import { sampleMiddleware } from './middleware/sampleMiddleware';

const app = express();

//get the data from the body using json type
//built in middleware
app.use(express.json());

//cors middleware
app.use(cors({
    origin: ["http://localhost:3000"], // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Allowed methods
    credentials: true
}));

//global middleware
app.use((req,res,next)=>{
    //res.send("Hellow im the Global middleware")
    next()
})

app.get("/",(req,res)=>{
    console.log("Running the default endpoint");
    res.send("Hellow... This is node.js backend server");
})

//endpoint with multiple middlewares
app.get("/hello",
    (req,res,next)=>{
    //console.log("Running the /hello endpoint");
    next();
},
    (req,res,next)=>{
    //console.log("2nd middleware of /hello endpoint");
    next();
},
(req,res)=>{
    res.send("Hellow from /hello endpoint");
});

app.get("/hi", sampleMiddleware ,(req,res,next)=>{
    //console.log("Running the /hi endpoint");
    next();
},(req,res)=>{
    res.send("Hellow from /hi endpoint");
});

app.get("/hola", sampleMiddleware , (req,res)=>{
    res.send("Hellow from /hola endpoint");
})

app.listen(5000, () => {
    console.log('Server is running on port 3000');
});