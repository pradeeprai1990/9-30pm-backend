const categoryModel = require("../../models/categoryModel");
const subcategoryModel = require("../../models/subCategoryModel");

let subCategoryController = {
  create: async (req, res) => {
    let inserObj = { ...req.body };
    try {
      let checksubCategory = await subcategoryModel.findOne({
        name: inserObj.name,
      }); //Object
      if (checksubCategory) {
        return res.send({
          status: false,
          error: {
            name: "sub category name already exist..",
          },
        });
      } else {
        if (req.file) {
          if (req.file.filename) {
            inserObj["image"] = req.file.filename;
          }
        }
        let subcategory = await subcategoryModel(inserObj);
        let insertRes = await subcategory.save();
        //DataBase Insert
        res.send({
          status: true,
          message: " Category Added",
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
    let path=process.env.SUBCATEGORYPATH
    let data = await subcategoryModel.find().populate('parent','name');
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
};

module.exports = { subCategoryController };
