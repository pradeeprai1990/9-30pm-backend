const faqModel = require("../../models/faqModel");

let faqController = {
  create: async (req, res) => {
    let { question, answer, order } = req.body;

    try {
      let checkFaq = await faqModel.findOne({ question });
      if (checkFaq) {
        return res.send({
          status: false,
          error: { question: "faq question already exist.." },
        });
      }

      let faq = await faqModel({ question, answer, order });
      let insertRes = await faq.save();
      res.send({ status: true, message: "Faq Added", insertRes });
    } catch (err) {
      if (err.errors) {
        let error = {};
        for (let key in err.errors) error[key] = err.errors[key].message;
        return res.send({ status: false, error });
      }
      console.error("Faq API error:", err);
      return res.status(500).send({ status: false, error: "Unable to add faq" });
    }
  },
  view: async (req, res) => {
    try {
      let data = await faqModel.find();
      res.send({ status: true, message: "Faq View", data });
    } catch (err) {
      console.error("Faq API error:", err);
      res.status(500).send({ status: false, error: "Unable to view faqs" });
    }
  },
  delete: async (req, res) => {
    let { ids } = req.body;
    try {
      let delRes = await faqModel.deleteMany({ _id: ids });
      res.send({ status: true, message: "Faq Delete", delRes });
    } catch (err) {
      console.error("Faq API error:", err);
      res.status(500).send({ status: false, error: "Unable to delete faqs" });
    }
  },
  update: async (req, res) => {
    let { id } = req.params;
    try {
      let updateRes = await faqModel.updateOne(
        { _id: id },
        { $set: req.body },
        { runValidators: true },
      );
      res.send({ status: true, message: "Faq Updated", updateRes });
    } catch (err) {
      if (err.errors) {
        let error = {};
        for (let key in err.errors) error[key] = err.errors[key].message;
        return res.send({ status: false, error });
      }
      console.error("Faq API error:", err);
      return res.status(500).send({ status: false, error: "Unable to update faq" });
    }
  },
  changeStatus: async (req, res) => {
    let { ids } = req.body;
    try {
      let oldStatus = await faqModel.find({ _id: ids });
      for (let obj of oldStatus) {
        await faqModel.updateOne(
          { _id: obj._id },
          { $set: { status: !obj.status } },
        );
      }
      res.send({ status: true, message: "Faq Status Changed" });
    } catch (err) {
      console.error("Faq API error:", err);
      res.status(500).send({ status: false, error: "Unable to change faq status" });
    }
  },
  getDetails: async (req, res) => {
    let { id } = req.params;
    try {
      let data = await faqModel.findOne({ _id: id });
      res.send({ status: true, message: "Faq View", data });
    } catch (err) {
      console.error("Faq API error:", err);
      res.status(500).send({ status: false, error: "Unable to view faq" });
    }
  },
};

module.exports = faqController;
