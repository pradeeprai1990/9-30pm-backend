let mongoose=require("mongoose")
let faqSchema=mongoose.Schema(
    {
        question:{
            type:String,
            required:[true,"faq name is required"],
        }, 
        answer:{
            type:Object,
            required:[true,"code  is required"],   
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
let faqModel=mongoose.model("faq",faqSchema)
module.exports=faqModel

