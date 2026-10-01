const materialModel = require("../../models/materialModel");

let materialController = {
  create: async (req, res) => {
    let { name, order } = req.body;

    try {
      let checkMaterial = await materialModel.findOne({ name });
      if (checkMaterial) {
        return res.send({
          status: false,
          error: {
            name: "material name already exist..",
          },
        });
      }

      let material = await materialModel(req.body);
      let insertRes = await material.save();
      res.send({
        status: true,
        message: " Material Added",
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
    let data = await materialModel.find();
    res.send({
      status: true,
      message: "Material View",
      data,
    });
  },
  delete: async (req, res) => {
    let { ids } = req.body;
    let delRes = await materialModel.deleteMany({ _id: ids });
    res.send({
      status: true,
      message: "Material Delete",
      delRes,
    });
  },
  update: async (req, res) => {
    let { id } = req.params;
    let updateRes = await materialModel.updateOne(
      {
        _id: id,
      },
      {
        $set: req.body,
      },
    );
    res.send({
      status: true,
      message: "Material Updated",
      updateRes,
    });
  },
  changeStatus: async (req, res) => {
    let { ids } = req.body;

    let oldStatus = await materialModel.find({ _id: ids });
    for (let obj of oldStatus) {
      await materialModel.updateOne(
        { _id: obj._id },
        {
          $set: {
            status: !obj.status,
          },
        },
      );
    }
    res.send({
      status: true,
      message: "Material Status Changed",
    });
  },
  getDetails: async (req, res) => {
    let { id } = req.params;
    let data = await materialModel.findOne({ _id: id });
    res.send({
      status: true,
      message: "Material View",
      data,
    });
  },
};

module.exports = materialController;
