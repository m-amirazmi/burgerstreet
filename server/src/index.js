require("dotenv").config();
const express = require("express");
const db = require("./utils/database");
const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());

app.use(require("./routes/post.route"));

db.on("connected", () => {
  console.log("Database is connected successfully");
  app.listen(port, () => console.log(`Listening to ${port}`));
});
