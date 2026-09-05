const colorModel = require("../../models/colorModel");

let colorController = {
  create: async (req, res) => {
    console.log(req.body);

    //Method1
    //  let insertRes= await colorModel.insertOne(req.body)
    //Method2
    try {
      let color = await colorModel(req.body);
      let insertRes = await color.save();
      //DataBase Insert
      res.send({
        status: true,
        message: "colorController Color Addred",
        insertRes,
      });
    } catch (err) {
      res.send({
        status: false,
        err,
      });
    }
  },
  view:async (req, res) => {
    let data=await colorModel.find()
    res.send({
      status: true,
      message: "Color View",
      data
    });
  },
  delete: (req, res) => {
    res.send({
      status: true,
      message: "Color Delete",
    });
  },
  update: (req, res) => {
    res.send({
      status: true,
      message: "Color Updated",
    });
  },
  changeStatus: (req, res) => {
    res.send({
      status: true,
      message: "Color Status Changed",
    });
  },
};

module.exports = colorController;
