const categoryModel = require("../../models/categoryModel");
const subcategoryModel = require("../../models/subCategoryModel");
const subSubcategoryModel = require("../../models/subSubCategoryModel");

let subSubCategoryController = {
  create: async (req, res) => {
    let inserObj = { ...req.body }; //name,parent,subCategory,order
    try {
      let checksubSubCategory = await subSubcategoryModel.findOne({
        name: inserObj.name,
      }); //Object
      if (checksubSubCategory) {
        return res.send({
          status: false,
          error: {
            name: "sub sub category name already exist..",
          },
        });
      } else {
        if (req.file) {
          if (req.file.filename) {
            inserObj["image"] = req.file.filename;
          }
        }
        let subSubcategory = await subSubcategoryModel(inserObj);
        let insertRes = await subSubcategory.save();
        //DataBase Insert
        res.send({
          status: true,
          message: "Sub Sub Category Added",
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
    let path = process.env.SUBSUBCATEGORYPATH;
    let data = await subSubcategoryModel
      .find()
      .populate("parent", "name")
      .populate("subCategory", "name");

    res.send({
      status: true,
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
};

module.exports = { subSubCategoryController };
