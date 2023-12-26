const {Schema,Model}=require("mongoose")
const { defaultImagePath } = require("../secret")

const userSchema=new Schema({
    name:{
            type:String,
            required:[true,"user name is required"],
            trim:true,
            maxlength:[30,"user name can be maximum 30 character"] ,  
            maxlength:[10,"user name can be minimum 10 character"]   
        },
    email:{
            type:String,
            required:[true,"email is required"],
            unique:true,
            trim:true,
            lowercase:true,
            message:"please enter a valid email"
        },
    password:{
            type:String,
            required:[true,"password is required"],
            maxlength:[8,"password can be maximum 8 character"] ,  
            maxlength:[5,"password can be minimum 5 character"] 
        },
        image:{
            type:String,
            default:defaultImagePath
        },
        address:{
            type:String,
            required:[true,"user address is required"],
        },
        phone:{
            type:String,
            required:[true,"user phone is required"],
        },
        isAdmin:{
            type:Boolean,
            default:false
        },
        isBanned:{
            type:Boolean,
            default:false
        },
},{timestamps:true})

const userModel=Model("userModel",userSchema)


module.exports=userModel