const { Schema, model } = require("mongoose");

const addressSchema = new Schema(
  {
    street_1: {
      type: String,
      required: true,
    },
    street_2: {
      type: String,
      required: false,
    },
    city: {
      type: String,
      required: true,
    },
    postcode: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    latitude: {
      type: Number,
      required: false,
    },
    longitude: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = model("Address", addressSchema);
