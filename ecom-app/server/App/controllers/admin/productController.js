const categoryModel = require("../../models/categoryModel");
const colorModel = require("../../models/colorModel");
const materialModel = require("../../models/materialModel");
const productModel = require("../../models/productModels");
const subcategoryModel = require("../../models/subCategoryModel");
const subSubcategoryModel = require("../../models/subSubCategoryModel");

let productController = {
    create: async (req, res) => {

        let insertObj = { ...req.body }

        if (req.files.image) {
            insertObj['image'] = req.files.image[0].filename
        }
        if (req.files.backImage) {
            insertObj['backImage'] = req.files.backImage[0].filename
        }
        if (req.files.gallery) {

            // let gallery=[]
            // for(let obj of req.files.gallery){
            //        gallery.push(obj.filename)
            // }

            insertObj['gallery'] = req.files.gallery.map((obj) => obj.filename)
            // [ '17908717418931.avif','17908717418942.jpg',""]

        }
        try {
            let productCheck = await productModel.findOne({
                name: insertObj.name,
            }); //Object
            if (productCheck) {
                return res.send({
                    status: false,
                    error: {
                        name: "product name already exist..",
                    },
                });
            } else {

                let productRes = await productModel(insertObj);
                let insertRes = await productRes.save();
                //DataBase Insert
                res.send({
                    status: true,
                    message: "Product Added",
                    insertRes,
                });
            }
        } catch (err) {
            let error = {};
            for (let key in err.errors) {
                error[key] = err.errors[key].message;
            }
            res.send({
                status: false,
                error,
            });
        }



    },
    view: async (req, res) => {
        let path = process.env.PRODUCTPATH
        let data = await
            productModel.find()
                .populate('parent', 'name')
                .populate('subCategory', 'name')
                .populate('subSubCategory', 'name')
                .populate('material', 'name')
                .populate('color', 'name')
        res.send({
            status: true,
            message: "Product View",
            path,
            data,
        });
    },
    details: async (req, res) => {
        let { id } = req.params;
        let path = process.env.PRODUCTPATH
        let data = await
            productModel.findOne({ _id: id })
                .populate('parent', 'name')
                .populate('subCategory', 'name')
                .populate('subSubCategory', 'name')
                .populate('material', 'name')
                .populate('color', 'name')
        res.send({
            status: true,
            message: "Product View",
            path,
            data,
        });
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
    subsubCategory: async (req, res) => {
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
    material: async (req, res) => {
        let data = await materialModel.find({ status: true }).select("name");
        res.send({
            status: true,
            data,
        });
    },
    colors: async (req, res) => {
        let data = await colorModel.find({ status: true }).select("name");
        res.send({
            status: true,
            data,
        });
    },
}

module.exports = productController