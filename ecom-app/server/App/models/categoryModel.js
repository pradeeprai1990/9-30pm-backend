let mongoose=require("mongoose")

let categorySchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Category name is required"],
            minLength:[2,"Category Name Must Be Atleast 2 Character"],
            maxLength:[100,"Category Name Must Be Atmost 100 Character"]
        }, 
        image:String, //Image name
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

let categoryModel=mongoose.model("category",categorySchema)
module.exports=categoryModel

