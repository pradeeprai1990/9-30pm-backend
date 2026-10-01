const { type } = require("express/lib/response")
let mongoose = require("mongoose")
let productSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Product name is required"],
            minLength: [2, "Product Name Must Be Atleast 2 Character"],
            maxLength: [100, "Product Name Must Be Atmost 100 Character"]
        },
        parent: {
            type: mongoose.Schema.Types.ObjectId,  //6aac21343bfe66e4e4e6c1bd
            ref: 'category',
        },
        subCategory: {
            type: mongoose.Schema.Types.ObjectId,  //6aac21343bfe66e4e4e6c1bd
            ref: 'subcategory',
        },
        subSubCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'subsubcategory',
        },
        material: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'material',
            }
        ],
        color: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'color',
            }
        ],
        productType: {
            type: String,
            enum: ['Featured', 'New Arrivals', 'Onsale']
        },
        bestSelling: {
            type: Boolean,
            enum:[true,false]
        },
        actualPrice: {
            type: Number,

        },
        salePrice: {
            type: Number,

        },
        stocks: {
            type: Number,

        },
        order: {
            type: Number,

        },
        description: String,
        image: String,
        backImage: String,
        gallery: Array,
        status: {
            type: Boolean,
            default: true
        },
        date: {
            type: Date,
            default: Date.now
        }
    }

);


let productModel = mongoose.model("product", productSchema)

module.exports = productModel