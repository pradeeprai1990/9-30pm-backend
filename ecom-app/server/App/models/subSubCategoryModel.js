let mongoose=require("mongoose")

let subSubcategorySchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Category name is required"],
            minLength:[2,"Category Name Must Be Atleast 2 Character"],
            maxLength:[100,"Category Name Must Be Atmost 100 Character"]
        }, 
        parent:{
            type:mongoose.Schema.Types.ObjectId,  //6aac21343bfe66e4e4e6c1bd
             ref: 'category',
        },
        subCategory:{
            type:mongoose.Schema.Types.ObjectId,  //6aac21343bfe66e4e4e6c1bd
             ref: 'subcategory',
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

let subSubcategoryModel=mongoose.model("subsubcategory",subSubcategorySchema)
module.exports=subSubcategoryModel

