const getUsers=(req,res)=>{
    try {
        res.status(200).send(
            {
                message:"users was returned",
            }
        )
    } catch (error) {
        
    }
}

module.exports=getUsers