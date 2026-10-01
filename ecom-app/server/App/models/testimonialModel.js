const mongoose = require("mongoose");

const testimonialSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "testimonial name is required"],
    minLength: [2, "name must be at least 2 characters"],
    maxLength: [100, "name must be at most 100 characters"],
  },
  role: {
    type: String,
    maxLength: [100, "role must be at most 100 characters"],
  },
  message: {
    type: String,
    required: [true, "message is required"],
  },
  image: String,
  rating: {
    type: Number,
    required: [true, "rating is required"],
    min: [1, "rating must be at least 1"],
    max: [5, "rating must be at most 5"],
  },
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

module.exports = mongoose.model("testimonial", testimonialSchema);
