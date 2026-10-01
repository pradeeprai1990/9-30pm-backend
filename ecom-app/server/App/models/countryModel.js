let mongoose=require("mongoose")

let countrySchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"country name is required"],
            minLength:[2,"country Name Must Be Atleast 2 Character"],
            maxLength:[100,"country Name Must Be Atmost 100 Character"]
        }, 
        code:{
            type:String,
            required:[true,"country code is required"],
            minLength:[2,"country code must be at least 2 characters"],
            maxLength:[10,"country code must be at most 10 characters"]
        },
        order:{
            type:Number,
            required:[true,"order is required"],
           
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
