const users = require("../models/userModel")

const getUsers=(req,res)=>{
    try {
        res.status(200).send(
            {
                message:"users was returned",
                users:users
            }
        )
    } catch (error) {
        
    }
}

module.exports=getUsers