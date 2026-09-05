let mongoose=require("mongoose")

let colorSchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"color name is required"],
            minLength:[2,"Color Name Must Be Atleast 2 Character"],
            maxLength:[100,"Color Name Must Be Atmost 100 Character"]
        }, 
        code:{
            type:String,
            required:[true,"code  is required"],
            minLength:[2,"code  Must Be Atleast 2 Character"],
            maxLength:[100,"code  Must Be Atmost 100 Character"]
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

let colorModel=mongoose.model("color",colorSchema)
module.exports=colorModel

