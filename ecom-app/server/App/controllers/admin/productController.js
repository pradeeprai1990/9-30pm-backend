const categoryModel = require("../../models/categoryModel");
const colorModel = require("../../models/colorModel");
const materialModel = require("../../models/materialModel");
const subcategoryModel = require("../../models/subCategoryModel");
const subSubcategoryModel = require("../../models/subSubCategoryModel");

let productController = {
    create:(req,res)=>{

        console.log('====================================');
        console.log(req.body);
        console.log('====================================');

        console.log(req.files);
        res.send("hello")
    },
    parent: async (req, res) => {
        let data = await categoryModel.find({ status: true }).select("name");
        res.send({
            status: true,
            data,
        });
    },
    subCategory: async (req, res) => {
        let { parentId } = req.params;

        let data = await subcategoryModel
            .find({ status: true, parent: parentId })
            .select("name");

        res.send({
            status: true,
            data,
        });
    },
    subsubCategory:async (req,res)=>{
        let { subcatId } = req.params;

  
        

        let data = await subSubcategoryModel
            .find({ status: true, subCategory: subcatId })
            .select("name");

        res.send({
            status: true,
            subcatId,
            data,
        });
    },
    material:async (req, res) => {
        let data = await materialModel.find({ status: true }).select("name");
        res.send({
            status: true,
            data,
        });
    },
     colors:async (req, res) => {
        let data = await colorModel.find({ status: true }).select("name");
        res.send({
            status: true,
            data,
        });
    },
}

module.exports = productController