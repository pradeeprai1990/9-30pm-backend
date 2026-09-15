let mongoose=require("mongoose")

let materialSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"material name is required"],
            minLength:[2,"material Name Must Be Atleast 2 Character"],
            maxLength:[100,"material Name Must Be Atmost 100 Character"]
        }, 
        
        order:{
            type:Number,
            required:[true,"code  is required"],
           
        },
        status:{
            type:Boolean,
            default:true
        },
        date:{
            type:Date,
            default:Date.now
        }

    }
)

let materialModel=mongoose.model("material",materialSchema)
module.exports=materialModel

