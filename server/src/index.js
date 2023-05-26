const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());

app.use("/api/message", (req, res) => {
  return res.status(200).json({ message: "OK Connected! Refreshed Second" });
});

app.listen(port, () =>
  console.log(`Listening to port http://localhost${port}`)
);
