const express = require("express");
const cors = require("cors");
const db = require("./utils/configs");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api", require("./routes/hello.routes"));
app.use("/api/message", (req, res) => {
  return res.status(200).json({ message: "OK Connected! Refreshed Second" });
});

db.on("connected", () => {
  console.log("Database is connected successfully");
  app.listen(port, () =>
    console.log(`Listening to port http://localhost:${port}`)
  );
});
