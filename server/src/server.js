const express=require("express")
const morgan = require('morgan')
const app=express()
app.use(morgan("dev"))


const isLoggedIn=(req,res,next)=>{
    console.log("IsloggedIn middleWare")
    next()
}
app.get("/test",(req,res)=>{
    res.status(200).send("api is working fine")
})
app.get("/api/user",isLoggedIn,(req,res)=>{
    res.status(200).send("user profile is return")
})


app.listen(3001,()=>{
    console.log("Server is running")
})