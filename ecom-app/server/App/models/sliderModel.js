const mongoose = require("mongoose");

const sliderSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, "slider title is required"],
    minLength: [2, "slider title must be at least 2 characters"],
    maxLength: [150, "slider title must be at most 150 characters"],
  },
  image: String,
  link: String,
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

module.exports = mongoose.model("slider", sliderSchema);
