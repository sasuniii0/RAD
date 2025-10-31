import express from 'express';

const app = express();

app.get("/",(req,res)=>{
    res.send("Hellow... This is node.js backend server");
})

app.listen(5000, () => {
    console.log('Server is running on port 3000');
});