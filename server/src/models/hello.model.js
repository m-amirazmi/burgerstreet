const { Schema, model } = require("mongoose");

const helloSchema = new Schema(
  {
    message: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Hello", helloSchema);
