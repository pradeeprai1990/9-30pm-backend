const countryModel = require("../../models/countryModel");

let countryController = {
  create: async (req, res) => {
    let { name, code, order } = req.body;

    try {
      let checkCountry = await countryModel.findOne({ name });
      if (checkCountry) {
        return res.send({
          status: false,
          error: { name: "country name already exist.." },
        });
      }

      let country = await countryModel({ name, code, order });
      let insertRes = await country.save();
      res.send({ status: true, message: "Country Added", insertRes });
    } catch (err) {
      if (err.errors) {
        let error = {};
        for (let key in err.errors) error[key] = err.errors[key].message;
        return res.send({ status: false, error });
      }
      console.error("Country API error:", err);
      return res.status(500).send({ status: false, error: "Unable to add country" });
    }
  },
  view: async (req, res) => {
    try {
      let data = await countryModel.find();
      res.send({ status: true, message: "Country View", data });
    } catch (err) {
      console.error("Country API error:", err);
      res.status(500).send({ status: false, error: "Unable to view countries" });
    }
  },
  delete: async (req, res) => {
    let { ids } = req.body;
    try {
      let delRes = await countryModel.deleteMany({ _id: ids });
      res.send({ status: true, message: "Country Delete", delRes });
    } catch (err) {
      console.error("Country API error:", err);
      res.status(500).send({ status: false, error: "Unable to delete countries" });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let updateRes = await countryModel.updateOne(
        { _id: id },
        { $set: req.body },
        { runValidators: true },
      );
      res.send({ status: true, message: "Country Updated", updateRes });
    } catch (err) {
      if (err.errors) {
        let error = {};
        for (let key in err.errors) error[key] = err.errors[key].message;
        return res.send({ status: false, error });
      }
      console.error("Country API error:", err);
      return res.status(500).send({ status: false, error: "Unable to update country" });
    }
  },
  changeStatus: async (req, res) => {
    let { ids } = req.body;
    try {
      let oldStatus = await countryModel.find({ _id: ids });
      for (let obj of oldStatus) {
        await countryModel.updateOne(
          { _id: obj._id },
          { $set: { status: !obj.status } },
        );
      }
      res.send({ status: true, message: "Country Status Changed" });
    } catch (err) {
      console.error("Country API error:", err);
      res.status(500).send({ status: false, error: "Unable to change country status" });
    }
  },
  getDetails: async (req, res) => {
    let { id } = req.params;
    try {
      let data = await countryModel.findOne({ _id: id });
      res.send({ status: true, message: "Country View", data });
    } catch (err) {
      console.error("Country API error:", err);
      res.status(500).send({ status: false, error: "Unable to view country" });
    }
  },
};

module.exports = countryController;
