const mongoose = require("mongoose");

const whyChooseUsSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "title is required"],
    minLength: [2, "title must be at least 2 characters"],
    maxLength: [150, "title must be at most 150 characters"],
  },
  description: {
    type: String,
    required: [true, "description is required"],
  },
  image: String,
  order: {
    type: Number,
    required: [true, "order is required"],
  },
  status: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("whyChooseUs", whyChooseUsSchema);
