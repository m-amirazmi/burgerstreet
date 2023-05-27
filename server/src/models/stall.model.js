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
    image_urls: {
      type: [String],
      required: false,
    },
    contact: {
      type: String,
      required: false,
    },
    is_verified: {
      type: String,
      enum: ["pending", "verified", "rejected", "unlisted"],
      default: "pending",
      required: true,
    },
    location: {
      type: Schema.Types.ObjectId,
      ref: "Address",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = model("Stall", stallSchema);
