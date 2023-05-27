const mongoose = require("mongoose");

mongoose.connect("mongodb://database:27017/burgerstreet", {
  useNewUrlParser: true,
});

const db = mongoose.connection;
db.on("disconnected", () =>
  console.log("Database is disconnected successfully")
);
db.on("error", console.error.bind(console, "connection error:"));

module.exports = db;
