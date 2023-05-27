const { Schema, model } = require("mongoose");

const stallSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: false,
    },
    images: {
      type: [String],
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = model("Stall", stallSchema);
