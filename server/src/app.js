const express=require("express")
const morgan = require('morgan')
const bodyParser=require("body-parser")
var createError = require('http-errors')
const app=express()
app.use(morgan("dev"))


const isLoggedIn=(req,res,next)=>{
    const loggedIn=false
    if(loggedIn){
        next()
    }
    else{
        res.status(401).send("please login first")
    }
    
}
app.get("/test",(req,res)=>{
    res.status(200).send("api is working fine")
})
app.get("/api/user",isLoggedIn,(req,res)=>{
    res.status(200).send("user profile is return")
})

// client error handling
app.use((req,res,next)=>{
    
    next(createError(404,"Route not found"))

})
// server error handling
app.use((err,req,res,next)=>{
    return res.status(500).send("Something broke")

})


app.listen(3001,()=>{
    console.log("Server is running")
})

export default app