const mongoose = require("mongoose");

mongoose.connect(process.env.DB_STRING, { useNewUrlParser: true });

const db = mongoose.connection;
// conn.on('connected', ()=>console.log('Database is connected successfully'))
db.on("disconnected", () =>
  console.log("Database is disconnected successfully")
);
db.on("error", console.error.bind(console, "connection error:"));

module.exports = db;
