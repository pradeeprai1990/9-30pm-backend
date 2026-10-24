let mongoose=require("mongoose")

let categorySchema=mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"Category name is required"],
            minLength:[2,"Category Name Must Be Atleast 2 Character"],
            maxLength:[100,"Category Name Must Be Atmost 100 Character"]
        }, 
        slug:String,
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

//Virtual Column -> category ki sub categories (subcategory.parent == category._id)
categorySchema.virtual("subCategories",{
    ref:"subcategory",
    localField:"_id",
    foreignField:"parent"
})

let categoryModel=mongoose.model("category",categorySchema)
module.exports=categoryModel

