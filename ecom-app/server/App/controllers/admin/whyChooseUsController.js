const whyChooseUsModel = require("../../models/whyChooseUsModel");

let whyChooseUsController = {
  create: async (req, res) => {
    let { title, description, order } = req.body;

    try {
      let insertObj = { title, description, order };
      if (req.file) insertObj.image = req.file.filename;

      let whyChooseUs = await whyChooseUsModel(insertObj);
      let insertRes = await whyChooseUs.save();
      res.send({
        status: true,
        message: "Why Choose Us Added",
        insertRes,
      });
    } catch (err) {
      if (err.errors) {
        let error = {};
        for (let key in err.errors) {
          error[key] = err.errors[key].message;
        }
        return res.send({ status: false, error });
      }
      console.error("Why Choose Us API error:", err);
      return res.status(500).send({ status: false, error: "Unable to add record" });
    }
  },
  view: async (req, res) => {
    try {
      let data = await whyChooseUsModel.find();
      res.send({
        status: true,
        path: "/uploads/why-choose-us/",
        message: "Why Choose Us View",
        data,
      });
    } catch (err) {
      console.error("Why Choose Us API error:", err);
      res.status(500).send({ status: false, error: "Unable to view records" });
    }
  },
  delete: async (req, res) => {
    let { ids } = req.body;
    try {
      let delRes = await whyChooseUsModel.deleteMany({ _id: ids });
      res.send({ status: true, message: "Why Choose Us Delete", delRes });
    } catch (err) {
      console.error("Why Choose Us API error:", err);
      res.status(500).send({ status: false, error: "Unable to delete records" });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    let updateObj = { ...req.body };
    if (req.file) updateObj.image = req.file.filename;

    try {
      let updateRes = await whyChooseUsModel.updateOne(
        { _id: id },
        { $set: updateObj },
        { runValidators: true },
      );
      res.send({ status: true, message: "Why Choose Us Updated", updateRes });
    } catch (err) {
      if (err.errors) {
        let error = {};
        for (let key in err.errors) {
          error[key] = err.errors[key].message;
        }
        return res.send({ status: false, error });
      }
      console.error("Why Choose Us API error:", err);
      return res.status(500).send({ status: false, error: "Unable to update record" });
    }
  },
  changeStatus: async (req, res) => {
    let { ids } = req.body;
    try {
      let oldStatus = await whyChooseUsModel.find({ _id: ids });
      for (let obj of oldStatus) {
        await whyChooseUsModel.updateOne(
          { _id: obj._id },
          { $set: { status: !obj.status } },
        );
      }
      res.send({ status: true, message: "Why Choose Us Status Changed" });
    } catch (err) {
      console.error("Why Choose Us API error:", err);
      res.status(500).send({ status: false, error: "Unable to change status" });
    }
  },
  getDetails: async (req, res) => {
    let { id } = req.params;
    try {
      let data = await whyChooseUsModel.findOne({ _id: id });
      res.send({ status: true, message: "Why Choose Us View", data });
    } catch (err) {
      console.error("Why Choose Us API error:", err);
      res.status(500).send({ status: false, error: "Unable to view record" });
    }
  },
};

module.exports = whyChooseUsController;
