//Add slug in existing Category, SubCategory, SubSubCategory, Product data
//Run: node addSlug.js
let mongoose = require("mongoose")
let slugify = require("slugify")
require("dotenv").config()
const categoryModel = require("./App/models/categoryModel");
const subcategoryModel = require("./App/models/subCategoryModel");
const subSubcategoryModel = require("./App/models/subSubCategoryModel");
const productModel = require("./App/models/productModels");

let addSlug = async (model, label) => {
    let data = await model.find({ $or: [{ slug: { $exists: false } }, { slug: "" }, { slug: null }] })
    for (let obj of data) {
        await model.updateOne(
            { _id: obj._id },
            { $set: { slug: slugify(obj.name || "", { lower: true, strict: true }) } }
        )
    }
    console.log(`${label}: ${data.length} slug added`);
}

mongoose.connect(`${process.env.CONNECTIONURL + process.env.DBNAME}`)
    .then(async () => {
        await addSlug(categoryModel, "Category")
        await addSlug(subcategoryModel, "SubCategory")
        await addSlug(subSubcategoryModel, "SubSubCategory")
        await addSlug(productModel, "Product")
        await mongoose.disconnect()
    })
