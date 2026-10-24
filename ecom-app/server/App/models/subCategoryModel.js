let mongoose=require("mongoose")

let subcategorySchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Category name is required"],
            minLength:[2,"Category Name Must Be Atleast 2 Character"],
            maxLength:[100,"Category Name Must Be Atmost 100 Character"]
        }, 
        slug:String,
        parent:{
            type:mongoose.Schema.Types.ObjectId,  //6aac21343bfe66e4e4e6c1bd
             ref: 'category',
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

    },
    {
        toJSON:{virtuals:true},
        toObject:{virtuals:true}
    }
)

//Virtual Column -> sub category ki sub sub categories (subsubcategory.subCategory == subcategory._id)
subcategorySchema.virtual("subSubCategories",{
    ref:"subsubcategory",
    localField:"_id",
    foreignField:"subCategory"
})

let subcategoryModel=mongoose.model("subcategory",subcategorySchema)
module.exports=subcategoryModel

