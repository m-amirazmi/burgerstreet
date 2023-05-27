const Hello = require("../models/hello.model");

exports.getHello = async (req, res) => {
  const data = await Hello.find({});
  if (data.length === 0)
    return res.status(200).json({ message: "No message found.", status: true });
  return res.status(200).json({ message: "OK!", status: true, data });
};

exports.createHello = async (req, res) => {
  if (!req.body || !req.body.message) {
    res.status(400);
    throw new Error("Please add a message.");
  }

  const message = await Hello.create({ message: req.body.message });
  return res.status(200).json({ message: "OK!", status: true, data: message });
};
