require('dotenv').config
const app=require("./app")
const port=process.env.SERVER_PORT||3002
app.listen(port,()=>{
    console.log(`Server is running on the port nb ${port}`)
})  