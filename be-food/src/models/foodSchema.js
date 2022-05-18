const mongoose = require("mongoose");

const foodSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required!"],
    unique: true,
    trim: true,
    minlength: [4, "name must greater 4, got {VALUE}"],
    maxlength: [12, "name must  is 12, got {VALUE}"],
  },
  category: { type: String, enum: ["dessert", "maincourse", "appetizer"] },
  description: { type: String },
  favourite: { type: String },
  image: { type: String },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Food", foodSchema);
