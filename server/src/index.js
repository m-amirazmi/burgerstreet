const express = require("express");
const cors = require("cors");
const db = require("./utils/configs");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/addresses", require("./routes/address.routes"));
app.use("/api/stalls", require("./routes/stall.routes"));

db.on("connected", () => {
  console.log("Database is connected successfully");
  app.listen(port, () =>
    console.log(`Listening to port http://localhost:${port}`)
  );
});
