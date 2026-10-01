const testimonialModel = require("../../models/testimonialModel");

let testimonialController = {
  create: async (req, res) => {
    let { name, role, message, rating, order } = req.body;

    try {
      let insertObj = { name, role, message, rating, order };
      if (req.file) insertObj.image = req.file.filename;

      let testimonial = await testimonialModel(insertObj);
      let insertRes = await testimonial.save();
      res.send({ status: true, message: "Testimonial Added", insertRes });
    } catch (err) {
      if (err.errors) {
        let error = {};
        for (let key in err.errors) error[key] = err.errors[key].message;
        return res.send({ status: false, error });
      }
      console.error("Testimonial API error:", err);
      return res.status(500).send({ status: false, error: "Unable to add testimonial" });
    }
  },
  view: async (req, res) => {
    try {
      let data = await testimonialModel.find();
      res.send({
        status: true,
        path: "/uploads/testimonial/",
        message: "Testimonial View",
        data,
      });
    } catch (err) {
      console.error("Testimonial API error:", err);
      res.status(500).send({ status: false, error: "Unable to view testimonials" });
    }
  },
  delete: async (req, res) => {
    let { ids } = req.body;
    try {
      let delRes = await testimonialModel.deleteMany({ _id: ids });
      res.send({ status: true, message: "Testimonial Delete", delRes });
    } catch (err) {
      console.error("Testimonial API error:", err);
      res.status(500).send({ status: false, error: "Unable to delete testimonials" });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    let updateObj = { ...req.body };
    if (req.file) updateObj.image = req.file.filename;

    try {
      let updateRes = await testimonialModel.updateOne(
        { _id: id },
        { $set: updateObj },
        { runValidators: true },
      );
      res.send({ status: true, message: "Testimonial Updated", updateRes });
    } catch (err) {
      if (err.errors) {
        let error = {};
        for (let key in err.errors) error[key] = err.errors[key].message;
        return res.send({ status: false, error });
      }
      console.error("Testimonial API error:", err);
      return res.status(500).send({ status: false, error: "Unable to update testimonial" });
    }
  },
  changeStatus: async (req, res) => {
    let { ids } = req.body;
    try {
      let oldStatus = await testimonialModel.find({ _id: ids });
      for (let obj of oldStatus) {
        await testimonialModel.updateOne(
          { _id: obj._id },
          { $set: { status: !obj.status } },
        );
      }
      res.send({ status: true, message: "Testimonial Status Changed" });
    } catch (err) {
      console.error("Testimonial API error:", err);
      res.status(500).send({ status: false, error: "Unable to change testimonial status" });
    }
  },
  getDetails: async (req, res) => {
    let { id } = req.params;
    try {
      let data = await testimonialModel.findOne({ _id: id });
      res.send({ status: true, message: "Testimonial View", data });
    } catch (err) {
      console.error("Testimonial API error:", err);
      res.status(500).send({ status: false, error: "Unable to view testimonial" });
    }
  },
};

module.exports = testimonialController;
