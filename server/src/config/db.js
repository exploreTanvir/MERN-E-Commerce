const mongoose=require("mongoose")
const { mongodbURL } = require("../secret")
const ConnectDB=async()=>{
    try {
      await mongoose.connect("mongodb://127.0.0.1:27017/test")
      console.log("Database is connected")
    } catch (error) {
      console.log("Database is not connected")
      console.log(error.message)
      process.exit(1)
    }
   
  }

module.exports=ConnectDB