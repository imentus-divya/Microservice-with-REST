const express=require('express')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.json());

app.get('/user',(req,res)=>{res.json("got users api !!!")})
app.listen(3002,()=>{console.log("server on ..")})