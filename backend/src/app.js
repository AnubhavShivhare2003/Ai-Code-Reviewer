const express=require('express');
const router = require('./routes/ai.routes');

const app=express();

app.use(express.json());
app.get("/",(req,res)=>{
    res.send("Hello World")
})
app.use("/ai",router)

module.exports=app;