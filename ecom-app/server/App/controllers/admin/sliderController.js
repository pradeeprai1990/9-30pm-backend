const sliderModel = require("../../models/sliderModel");

let sliderController = {
  create: async (req, res) => {
    let { title, link, order } = req.body;

    try {
      let insertObj = { title, link, order };
      if (req.file) insertObj.image = req.file.filename;

      let slider = await sliderModel(insertObj);
      let insertRes = await slider.save();
      res.send({ status: true, message: "Slider Added", insertRes });
    } catch (err) {
      if (err.errors) {
        let error = {};
        for (let key in err.errors) error[key] = err.errors[key].message;
        return res.send({ status: false, error });
      }
      console.error("Slider API error:", err);
      return res.status(500).send({ status: false, error: "Unable to add slider" });
    }
  },
  view: async (req, res) => {
    try {
      let data = await sliderModel.find();
      res.send({
        status: true,
        path: "/uploads/slider/",
        message: "Slider View",
        data,
      });
    } catch (err) {
      console.error("Slider API error:", err);
      res.status(500).send({ status: false, error: "Unable to view sliders" });
    }
  },
  delete: async (req, res) => {
    let { ids } = req.body;
    try {
      let delRes = await sliderModel.deleteMany({ _id: ids });
      res.send({ status: true, message: "Slider Delete", delRes });
    } catch (err) {
      console.error("Slider API error:", err);
      res.status(500).send({ status: false, error: "Unable to delete sliders" });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    let updateObj = { ...req.body };
    if (req.file) updateObj.image = req.file.filename;

    try {
      let updateRes = await sliderModel.updateOne(
        { _id: id },
        { $set: updateObj },
        { runValidators: true },
      );
      res.send({ status: true, message: "Slider Updated", updateRes });
    } catch (err) {
      if (err.errors) {
        let error = {};
        for (let key in err.errors) error[key] = err.errors[key].message;
        return res.send({ status: false, error });
      }
      console.error("Slider API error:", err);
      return res.status(500).send({ status: false, error: "Unable to update slider" });
    }
  },
  changeStatus: async (req, res) => {
    let { ids } = req.body;
    try {
      let oldStatus = await sliderModel.find({ _id: ids });
      for (let obj of oldStatus) {
        await sliderModel.updateOne(
          { _id: obj._id },
          { $set: { status: !obj.status } },
        );
      }
      res.send({ status: true, message: "Slider Status Changed" });
    } catch (err) {
      console.error("Slider API error:", err);
      res.status(500).send({ status: false, error: "Unable to change slider status" });
    }
  },
  getDetails: async (req, res) => {
    let { id } = req.params;
    try {
      let data = await sliderModel.findOne({ _id: id });
      res.send({ status: true, message: "Slider View", data });
    } catch (err) {
      console.error("Slider API error:", err);
      res.status(500).send({ status: false, error: "Unable to view slider" });
    }
  },
};

module.exports = sliderController;
