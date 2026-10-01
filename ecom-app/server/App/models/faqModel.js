let mongoose=require("mongoose")
let faqSchema=mongoose.Schema(
    {
        question:{
            type:String,
            required:[true,"faq question is required"],
            minLength:[2,"faq question must be at least 2 characters"],
            maxLength:[500,"faq question must be at most 500 characters"]
        }, 
        answer:{
            type:String,
            required:[true,"faq answer is required"],
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
let faqModel=mongoose.model("faq",faqSchema)
module.exports=faqModel
