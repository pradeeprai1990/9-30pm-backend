const categoryModel = require("../../models/categoryModel");

let categoryController = {
  create: async (req, res) => {
    let { name, order } = req.body;

    try {
      let checkCategory = await categoryModel.findOne({ name }); //Object
      if (checkCategory) {
        //Error
        return res.send({
          status: false,
          error: {
            name: "category name already exist..",
          },
        });
      }
      let insertOBj = {
        name,
        order,
      };
      if (req.file) {
        if (req.file.filename) {
          insertOBj["image"] = req.file.filename;
        }
      }
      let category = await categoryModel(insertOBj);
      let insertRes = await category.save();
      //DataBase Insert
      res.send({
        status: true,
        message: " Category Added",
        insertRes,
      });
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

    path=process.env.CATEGORYPATH
    let data = await categoryModel.find();
    res.send({
      status: true,
      path,
      message: "Category View",
      data,
    });
  },
  delete: async (req, res) => {
    let { ids } = req.body; //Array [color id]
    let delRes = await colorModel.deleteMany({ _id: ids });
    res.send({
      status: true,
      message: "Color Delete",
      delRes,
    });
  },
  update: async (req, res) => {
    let { id } = req.params;
    let updateRes = await colorModel.updateOne(
      {
        _id: id,
      },
      {
        $set: req.body,
      },
    );
    res.send({
      status: true,
      message: "Color Updated",
      updateRes,
    });
  },
  changeStatus: async (req, res) => {
    let { ids } = req.body;

    let oldStatus = await colorModel.find({ _id: ids });
    for (let obj of oldStatus) {
      await colorModel.updateOne(
        { _id: obj._id },
        {
          $set: {
            status: !obj.status,
          },
        },
      );
    }
    //  console.log(oldStatus);
    res.send({
      status: true,
      message: "Color Status Changed",
    });
  },
  getDetails: async (req, res) => {
    let { id } = req.params;
    let data = await colorModel.findOne({ _id: id });
    res.send({
      status: true,
      message: "Color View",
      data,
    });
  },
};

module.exports = categoryController;
