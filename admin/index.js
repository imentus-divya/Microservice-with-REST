const express=require('express')
const axios=require('axios')
const bodyParser=require('body-parser')
const app=express()
app.use(bodyParser.json());

async function callUser()
{
    try{
        const dataa=await axios.get('http://localhost:3002/user')
        console.log("🚀 ~ data:", dataa.data)
    }
    catch(e)
    {
        console.log("🚀 ~ e:", e)
    }
}
   

app.get('/admin',(req,res)=>{res.json("got admin api !!!")})
callUser()
app.listen(3001,()=>{console.log("server on ..")})