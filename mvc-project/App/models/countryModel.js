let mongoose=require("mongoose")

let countrySchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"country name is required"],
            minLength:[2,"country Name Must Be Atleast 2 Character"],
            maxLength:[100,"country Name Must Be Atmost 100 Character"]
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

let countryModel=mongoose.model("country",countrySchema)
module.exports=countryModel

