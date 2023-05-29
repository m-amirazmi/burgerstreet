const path = require("path");
const express = require("express");
const cors = require("cors");
const db = require("./utils/configs");
const app = express();
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use((req, res, next) => {
  console.log("DEBUGG", path.join(__dirname, "uploads/"));
  next();
});
app.use(express.static(path.join(__dirname, "uploads/")));
app.use("/api/addresses", require("./routes/address.routes"));
app.use("/api/stalls", require("./routes/stall.routes"));
app.use("/api/uploads", require("./routes/upload.routes"));

db.on("connected", () => {
  console.log("Database is connected successfully");
  app.listen(port, () =>
    console.log(`Listening to port http://localhost:${port}`)
  );
});
