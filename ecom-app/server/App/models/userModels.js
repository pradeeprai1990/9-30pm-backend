let mongoose=require("mongoose")

let userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,

    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:"default.png"
    },
    password:{
        type:String,
        required:true
    }
})

let UserModel=mongoose.model("user",userSchema)
module.exports=UserModel